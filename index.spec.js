"use strict";

var CustomError = require("./index");
var expect = require("chai").expect;

describe("CustomError", function() {

  it("should create a custom error", function() {
    var ServerError = CustomError.create("ServerError");
    var serverError = new ServerError();
    expect(serverError.name).to.equals("ServerError");
  });

  it("should create a custom error with custom properties", function() {
    var errorArgs = {
      name : "ServerError",
      message : "Default Message",
      statusCode : 500
    };
    var ServerError = CustomError.create(errorArgs);
    var serverError = new ServerError();
    expect(serverError).to.deep.equals(errorArgs);
  });

  it("should throw a custom error with custom message", function() {
    var ServerError = CustomError.create({name : "ServerError", message : "Default Message"});
    var serverError = new ServerError("Custom message");
    expect(serverError.message).to.equals("Custom message");
  });

  it("should throw a custom error with custom properties", function() {
    var ServerError = CustomError.create({
      name : "ServerError",
      message : "Default Message",
      statusCode : 500
    });
    var serverError = new ServerError({message : "Custom message", statusCode : 501});
    expect(serverError).to.contains({
      message : "Custom message",
      statusCode : 501
    });
  });

  it("should fail to create a custom error without name", function() {
    expect(function shouldFail() {
      CustomError.create();
    }).to.throw("Invalid CustomError arguments");
  });

  it("should fail to create a custom error from object without a name property", function() {
    expect(function shouldFail() {
      CustomError.create();
    }).to.throw("Invalid CustomError arguments");
  });

  it("should fail to create a custom error with null name", function() {
    expect(function shouldFail() {
      CustomError.create({
        customKey : "key",
        message : "message"
      });
    }).to.throw("Invalid CustomError arguments");
  });

  it("should be an instance of CustomError", function() {
    var MyCustomError = CustomError.create("MyCustomError");
    var myCustomError = new MyCustomError("a custom message");
    expect(myCustomError).to.be.an.instanceof(MyCustomError);
  });

  it("should inherit from Error class", function() {
    var MyCustomError = CustomError.create("MyCustomError");
    var myCustomError = new MyCustomError("a custom message");
    expect(myCustomError).to.be.an.instanceof(Error);
  });

  it("should contain valid toString method", function() {
    var MyCustomError = CustomError.create("Name");
    var myCustomError = new MyCustomError("Message");
    expect(myCustomError.toString()).to.equals("Name: Message");
  });

});
