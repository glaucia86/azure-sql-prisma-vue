/**
 * file: GetEmployee/index.js
 * date: 03/20/2022
 * description: file responsible for list an 'Employee' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({
      where: {
        employee_id: parseInt(id),
      },
    });

    return {
      status: 200,
      body: employee,
    };
  } catch (error) {
    context.log('Error to list an Employee.');
    return handleError(500, error, context);
  }
};
