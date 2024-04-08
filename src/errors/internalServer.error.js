const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
//We will create new Error object and pass the arguments and here we will receive it
//and call the super class which is the BaseError class
class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.NOT_IMPLEMENTED,
      `Something went wrong`,
      details
    );
  }
}

module.exports = InternalServerError;
