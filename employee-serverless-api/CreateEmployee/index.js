/**
 * file: CreateEmployee/index.js
 * date: 02/20/2022
 * description: file responsible for create a new 'Employee'
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function(context, req) {
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

    return {
      status: 201,
      body: employee,
    };
  } catch (error) {
    context.log('Error to create a new Employee.');
    return handleError(500, error, context);
  }
};
