/**
 * file: DeleteEmployee/index.js
 * date: 03/20/2022
 * description: file responsible for delete an 'Employee' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: {
        employee_id: String(id),
      },
    });

    return {
      status: 204,
    };
  } catch (error) {
    context.log('Error to delete an Employee.');
    context.log(error);
    return handleError(500, error);
  }
};
