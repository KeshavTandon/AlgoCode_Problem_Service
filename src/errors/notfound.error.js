const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
//We will create new Error object and pass the arguments and here we will receive it
//and call the super class which is the BaseError class
class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      `The requested resource:${resourceName} with value:${resourceValue} Not Found`,
      {
        resourceName,
        resourceValue
      }
    );
  }
}

module.exports = NotFound;
