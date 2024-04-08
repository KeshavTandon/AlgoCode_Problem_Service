class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description); //super class is Error class so it will call the Error class and there it will be
    //assigned as this.description=description
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}

module.exports = BaseError;
