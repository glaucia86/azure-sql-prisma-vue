/**
 * file: src/routes/employee.routes.js
 * description: file responsible for API routes
 * date: 01/08/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> List All Employees: (GET): localhost:3001/api/v1/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Create a new Employee: (POST): localhost:3001/api/v1/employees
router.post('/employees', employeeController.createEmployee);

// ==> List 'Employee' by Id: (GET): localhost:3001/api/v1/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById);

// ==> Update 'Employee' by Id: (PUT): localhost:3001/api/v1/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById);

// ==> Delete 'Employee' by Id: (DELETE): localhost:3001/api/v1/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;
