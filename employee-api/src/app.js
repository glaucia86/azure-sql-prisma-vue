const express = require('express');
const cors = require('cors');

const app = express();

// ==> API's Routes
const index = require('./routes/index');
// const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);

module.exports = app;