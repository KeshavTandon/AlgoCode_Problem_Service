const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
//We will create new Error object and pass the arguments and here we will receive it 
//and call the super class which is the BaseError class 
class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid property ${propertyName} provided`,
      details
    );
  }
} 


module.exports = BadRequest;
