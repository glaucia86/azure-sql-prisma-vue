/**
 * file: src/utils/errors/http-response.js
 * description: file responsible for manage all the http status code in the application
 * date: 01/11/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const httpStatusCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = httpStatusCode;
