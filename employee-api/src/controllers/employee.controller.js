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