/**
 * file: src/utils/errors/custom-error.js
 * description: file responsible for manage all the error messages in the application
 * date: 01/11/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const httpResponse = require('../http/http-response');

class CustomError extends Error {
  constructor({ message, name, statusCode, data }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, CustomError);
  }
}

class HttpBadRequest extends CustomError {
  constructor(message = 'Bad Request', data) {
    super({
      message,
      name: HttpBadRequest,
      statusCode: httpResponse.BAD_REQUEST,
      data,
    });
  }
}

class InternalServerError extends CustomError {
  constructor(message = 'Internal Server Error', data) {
    super({
      message,
      name: InternalServerError,
      statusCode: httpResponse.INTERNAL_SERVER_ERROR,
      data,
    });
  }
}

class Unauthorized extends CustomError {
  constructor(message = 'Unauthorized', data) {
    super({
      message,
      name: Unauthorized,
      statusCode: httpResponse.UNAUTHORIZED,
      data,
    });
  }
}

module.exports = {
  CustomError,
  HttpBadRequest,
  InternalServerError,
  Unauthorized,
};
