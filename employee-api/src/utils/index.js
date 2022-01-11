/**
 * file: src/utils/index.js
 * description: file responsible for manage all the errors and status code in the application
 * date: 01/08/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const CustomError = require('./errors/custom-error');
const HttpResponse = require('./http/http-response');

module.exports = {
  CustomError,
  HttpResponse,
};
