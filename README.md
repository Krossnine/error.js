[![Build Status](https://travis-ci.org/Krossnine/error.js.svg?branch=master)](https://travis-ci.org/Krossnine/error.js)
[![Dependency Status](https://david-dm.org/krossnine/custom-error.svg?style=flat)](https://david-dm.org/Krossnine/custom-error#info=dependencies)
[![devDependency Status](https://david-dm.org/Krossnine/custom-error/dev-status.svg)](https://david-dm.org/Krossnine/custom-error#info=devDependencies)
[![Build Status](https://badge.fury.io/js/error.js.svg)](https://www.npmjs.com/package/error.js)


# Create custom errors in javascript

```javascript
var MyCustomError = CustomError.create("MyCustomError");

throw new MyCustomError("Ooops");
```

## Installation

```shell
$ npm install --save error.js
```

## Quick start

```javascript
/* Require the dependency */
var CustomError = require("error.js");

/* Create your custom error once */
var MyCustomError = CustomError.create("MyCustomError");

/* Throw your custom error */
throw new MyCustomError("oops");
```

## Usage

### Create a custom error :

```javascript
var MyCustomName = CustomError.create("MyCustomName");
```

### Create a custom error with additional properties :

```javascript
var NotFoundError = CustomError.create({
	name : "NotFound",
	message : "Content not found",
	statusCode : 404
});
```

### Throw a custom error :

```javascript
throw new MyCustomError("oops");
```

### Throw a custom error with additional properties :

```javascript
throw new NotFoundError({
	message : "Could not find requested user",
	userId : "123-456-789"
});
```

### Check if an Error is a custom error :

```javascript
var MyCustomError = CustomError.create("MyCustomError");
var myCustomError = new MyCustomError("oops");

/* Will return true */
CustomError.isCustom(myCustomError);
```

```javascript
var e = new Error("oops");

/* Will return false */
CustomError.isCustom(e);
```


