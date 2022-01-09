/**
 * file: src/controllers/employee.controller.js
 * description: file responsible for the CRUD logic (API - Employee)
 * date: 01/08/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.listAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({});
    res.status(200).send(employees);
  } catch (error) {
    console.log('listAllEmployees', error);
    res.status(500).send({
      message: 'Occur an error!',
    });
  }
};
