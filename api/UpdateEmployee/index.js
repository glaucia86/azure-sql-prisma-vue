/**
 * file: UpdateEmployee/index.js
 * date: 04/05/2022
 * description: file responsible for update an 'Employee' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    const { name, job_role, salary, employee_registration } = req.body;

    const employee = await prisma.employee.update({
      where: {
        employee_id: parseInt(id),
      },
      data: {
        name: name || undefined,
        job_role: job_role || undefined,
        salary: salary || undefined,
        employee_registration: parseInt(employee_registration) || undefined,
      },
    });

    return {
      status: 200,
      body: employee,
    };
  } catch (error) {
    context.log('Error to update an Employee');
    return handleError(500, error, context);
  }
};
