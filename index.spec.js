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
    expect(serverError).to.contains(errorArgs);
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

  it("should detect custom error", function() {
    var TestError = CustomError.create("TestError");
    var testError = new TestError();
    expect(CustomError.isCustom(testError)).to.be.true;
  });

  it("should not detect standard error as custom", function() {
    var error = new Error();
    expect(CustomError.isCustom(error)).to.be.false;
  });

  describe("inheritance", function () {
    it("should found parent attributes on child error", function() {
      var ParentError = CustomError.create({name : "ParentError", content : "parent"});
      var ChildError = CustomError.create("ChildError", ParentError);

      expect(new ChildError().content).to.be.equal("parent");
    });

    it("should ovveride parent attributes on child error", function() {
      var ParentError = CustomError.create({name : "ParentError", content : "parent"});
      var ChildError = CustomError.create("ChildError", ParentError);

      expect(new ChildError({content : "override"}).content).to.be.equal("override");
    });

    it("should be custom error if inheritance", function() {
      var ParentError = CustomError.create({name : "ParentError", content : "parent"});
      var ChildError = CustomError.create("ChildError", ParentError);

      expect(CustomError.isCustom(new ChildError())).to.be.true;
    });

    it("should instanceOf each parent", function() {
      var ParentError = CustomError.create({name : "ParentError", content : "parent"});
      var ChildError = CustomError.create("ChildError", ParentError);

      expect(new ChildError()).to.be.instanceOf(ChildError);
      expect(new ChildError()).to.be.instanceOf(ParentError);
      expect(new ChildError()).to.be.instanceOf(Error);
    });

    it("should not instanceOf sibling", function () {
      var ParentError = CustomError.create({name : "ParentError", content : "parent"});
      var Sibling = CustomError.create({name : "ParentError", content : "parent"});
      var ChildError = CustomError.create("ChildError", ParentError);

      expect(new ChildError()).not.to.be.instanceOf(Sibling);
    });
  });

  it("stringify", function () {
    var ParentError = CustomError.create({name : "ParentError", content : "parent"});
    var ChildError = CustomError.create({name : "ChildError", child : "child"}, ParentError);

    var parse = JSON.parse(JSON.stringify(new ChildError({"prop" : "prop"})));
    expect(parse).to.have.property("prop");
    expect(parse).to.have.property("content");
    expect(parse).to.have.property("child");
    expect(parse).to.have.property("name");
    expect(parse).not.to.have.property("toJSON");
  })
});
