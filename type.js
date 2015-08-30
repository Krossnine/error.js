"use strict";

function exist(value) {
  return value !== undefined && value !== null;
}

function isArray(value) {
  return value instanceof Array;
}

function isObject(value) {
  return exist(value) && typeof value === "object" && !isArray(value);
}

function isPrimitive(value) {
  return exist(value) && !isObject(value) && !isArray(value);
}

function isString(value) {
  return typeof value === "string";
}

module.exports = {
  isArray : isArray,
  isObject : isObject,
  isPrimitive : isPrimitive,
  isString : isString
};
