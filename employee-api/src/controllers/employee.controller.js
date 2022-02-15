const prisma = require('../config/prisma-client.config');

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
    const { name, job_role, salary, employee_registration } = req.body;

    const employee = await prisma.employee.create({
      data: {
        name,
        job_role,
        salary,
        employee_registration: parseInt(employee_registration),
      },
    });
    res
      .status(201)
      .send({ message: 'Employee created successfully!', employee });
  } catch (error) {
    console.log('createEmployee', error);
    res.status(500).send({ message: 'Occur an error' });
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
    const { name, job_role, salary, employee_registration } = req.body;

    const employee = await prisma.employee.update({
      where: {
        employee_id: String(id),
      },
      data: {
        name: name || undefined,
        job_role: job_role || undefined,
        salary: salary || undefined,
        employee_registration: employee_registration || undefined
      },
    });
    res
      .status(200)
      .send({ message: 'Employee updated successfully', employee });
  } catch (error) {
    console.log('updateEmployeeById', error);
    res.status(500).send({ message: 'Occur an error' });
  }
};

exports.deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.delete({
      where: {
        employee_id: String(id),
      },
    });
    res
      .status(200)
      .send({ message: 'Employee deleted successfully', employee });
  } catch (error) {
    console.log('deleteEmployeeById', error);
    res.status(500).send({ message: 'Occur an error' });
  }
};