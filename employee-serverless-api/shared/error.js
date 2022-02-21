/**
 * file: shared/error.js
 * date: 02/20/2022
 * description: file responsible for sending error messages.
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

module.exports = async function handleError(status, message, context) {
  context.res = {
    status: status,
    body: message
  };
}