"use strict";

var expect = require("chai").expect;
var Type = require("./type");

describe("Type", function() {

  describe("isArray", function() {

    it("should detect array", function() {
      expect(Type.isArray([1, 2, 3])).to.be.true;
    });

    it("should detect empty array", function() {
      expect(Type.isArray([])).to.be.true;
    });

    it("should not detect undefined as array", function() {
      expect(Type.isArray()).to.be.false;
    });

    it("should not detect null as array", function() {
      expect(Type.isArray(null)).to.be.false;
    });

  });

  describe("isObject", function() {

    it("should detect object", function() {
      expect(Type.isObject({prop : "abc"})).to.be.true;
    });

    it("should detect empty object", function() {
      expect(Type.isObject({})).to.be.true;
    });

    it("should not detect undefined as object", function() {
      expect(Type.isObject()).to.be.false;
    });

    it("should not detect null as object", function() {
      expect(Type.isObject(null)).to.be.false;
    });

  });

  describe("isPrimitive", function() {

    it("should detect number as primitive", function() {
      expect(Type.isPrimitive(1)).to.be.true;
    });

    it("should detect string as primitive", function() {
      expect(Type.isPrimitive("")).to.be.true;
    });

    it("should not detect undefined as primitive", function() {
      expect(Type.isPrimitive()).to.be.false;
    });

    it("should not detect null as primitive", function() {
      expect(Type.isPrimitive(null)).to.be.false;
    });

  });

  describe("isString", function() {

    it("should detect string as string", function() {
      expect(Type.isString("test")).to.be.true;
    });

    it("should not detect array as string", function() {
      expect(Type.isString([])).to.be.false;
    });

    it("should not detect object as string", function() {
      expect(Type.isString({})).to.be.false;
    });

    it("should not detect integer as string", function() {
      expect(Type.isString(1)).to.be.false;
    });

    it("should not detect undefined as string", function() {
      expect(Type.isString()).to.be.false;
    });

    it("should not detect null as string", function() {
      expect(Type.isString(null)).to.be.false;
    });
  });

});
