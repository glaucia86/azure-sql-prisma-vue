/**
 * file: CreateEmployee/index.js
 * date: 03/20/2022
 * description: file responsible for create a new 'Employee'
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { name, job_role, salary, employee_registration } = req.body;

    const employeeRegistrationExists = await prisma.employee.findFirst({
      where: {
        employee_registration: parseInt(employee_registration),
      },
    });

    if (employeeRegistrationExists) {
      return handleError(409, 'Employee already exists');
    }

    const employee = await prisma.employee.create({
      data: {
        name,
        job_role,
        salary,
        employee_registration: parseInt(employee_registration),
      },
    });

    return {
      status: 201,
      body: employee,
    };
  } catch (error) {
    context.log('Error to create a new Employee.');
    context.log(error);
    return handleError(500, error);
  }
};
