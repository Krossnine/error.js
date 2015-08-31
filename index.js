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

function createCustomError(defaultErrorArgs) {

  ensureArgs(defaultErrorArgs);

  var CustomError = function(customErrorArgs) {
    assign(this, normalizeErrorArgs(defaultErrorArgs));
    assign(this, normalizeCustomErrorArgs(customErrorArgs));
    this.message = this.message || '';

    Error.captureStackTrace(this, this.constructor);
  };

  util.inherits(CustomError, Error);
  CustomError.prototype._isCustom = true;

  return CustomError;
}

function isCustomError(err) {
  return err._isCustom === true;
}

module.exports = {
  create : createCustomError,
  isCustom : isCustomError
};
