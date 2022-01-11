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

exports.createEmployee = async (req, res) => {
  try {
    const employee = await prisma.employee.create({
      data: req.body,
    });
    res
      .status(201)
      .send({ message: 'Employee created successfully!', employee });
  } catch (error) {
    console.log('createEmployee', error);
    res.status(500).send({
      message: 'Occur an error!',
    });
  }
};

exports.findEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: {
        employee_id: String(id),
      },
    });
    res.status(200).send(employee);
  } catch (error) {
    console.log('findEmployeeById', error);
    res.status(500).send({ message: 'Occur an error!' });
  }
};

exports.updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.update({
      where: {
        employee_id: String(id),
      },
      data: req.body,
    });
    res
      .status(200)
      .send({ message: 'Employee updated successfully', employee });
  } catch (error) {
    console.log('updateEmployeeById', error);
    res.status(500).send({ message: 'Occur an error!' });
  }
};
