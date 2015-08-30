"use strict";

module.exports = function assign(target, obj) {
  target = target || {};
  for (var prop in obj) {
    target[prop] = obj[prop];
  }
  return target;
};
