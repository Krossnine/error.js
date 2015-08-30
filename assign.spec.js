"use strict";

var assign = require("./assign");
var expect = require("chai").expect;

describe("assign function", function() {

  it("should copy source object properties to destination object", function() {
    var srcObject = {key1 : "key1", key2 : "key2"};
    var destObject = {};

    assign(destObject, srcObject);

    expect(destObject).to.deep.contains(srcObject);
  });

  it("should override destination property with source object property", function() {
    var srcObject = {key1 : "key1", key2 : "key2"};
    var destObject = {key1 : "oldKey1"};

    assign(destObject, srcObject);

    expect(destObject).to.deep.contains(srcObject);
  });

  it("should keep destination object properties", function() {
    var srcObject = {key2 : "key2"};
    var destObject = {key1 : "key1"};

    assign(destObject, srcObject);

    expect(destObject).to.contain.all.keys(["key1", "key2"]);
  });

  it("should not fail on null source object", function() {
    var srcObject = null;
    var destObject = {key : "key"};

    assign(destObject, srcObject);
  });

  it("should not fail on undefined source object", function() {
    var srcObject = undefined;
    var destObject = {key : "key"};

    assign(destObject, srcObject);
  });

  it("should not fail on null destination object", function() {
    var srcObject = {key : "key"};
    var destObject = null;

    assign(destObject, srcObject);
  });

  it("should not fail on undefined destination object", function() {
    var srcObject = {key : "key"};
    var destObject = undefined;

    assign(destObject, srcObject);
  });

});