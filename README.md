[![Dependency Status](https://david-dm.org/krossnine/custom-error.svg?style=flat)](https://david-dm.org/Krossnine/custom-error#info=dependencies)
[![devDependency Status](https://david-dm.org/Krossnine/custom-error/dev-status.svg)](https://david-dm.org/Krossnine/custom-error#info=devDependencies)

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


