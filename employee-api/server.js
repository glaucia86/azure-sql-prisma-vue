/**
 * file: server.js
 * description: main file responsible for all configuration and execution of the Node.js Api Application
 * date: 01/08/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Application running on port ', port);
});
