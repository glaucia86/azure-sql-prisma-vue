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