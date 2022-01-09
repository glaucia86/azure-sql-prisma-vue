/**
 * file: src/routes/index.js
 * description: file responsible for the API call in the application on the Back-End side
 * date: 01/08/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome to the Azure SQL Server + Prisma (Employee API) App!',
    version: '1.0.0',
  });
});

module.exports = router;
