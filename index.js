"use strict";

var util = require("util");
var assign = require("./assign");
var Type = require("./type");

function normalizeErrorArgs(args) {
  return Type.isString(args) ? {name : args} : args;
}

function normalizeCustomErrorArgs(args) {
  return Type.isString(args) ? {message : args} : args;
}

function ensureArgs(args) {
  if (Type.isString(args) || (Type.isObject(args) && Type.isString(args.name))) {
    return;
  }
  throw new Error("Invalid CustomError arguments");
}

function createCustomError(defaultErrorArgs, ParentError) {

  ensureArgs(defaultErrorArgs);

  var CustomError = function(customErrorArgs) {
    assign(this, normalizeCustomErrorArgs(customErrorArgs));

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    }
  };

  util.inherits(CustomError, ParentError || Error);
  assign(CustomError.prototype, normalizeErrorArgs(defaultErrorArgs));
  CustomError.prototype.toJSON = function toJSON() {
    return assign({}, this);
  };

  return CustomError;
}

function isCustomError(err) {
  function getPrototypeOfConstructor(instance) {
    return instance && instance.constructor && instance.constructor.prototype;
  }

  return getPrototypeOfConstructor(getPrototypeOfConstructor(err)) instanceof Error;
}

module.exports = {
  create : createCustomError,
  isCustom : isCustomError,
};
