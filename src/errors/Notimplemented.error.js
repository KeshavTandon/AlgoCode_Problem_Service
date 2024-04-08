const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
//We will create new Error object and pass the arguments and here we will receive it
//and call the super class which is the BaseError class
class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
