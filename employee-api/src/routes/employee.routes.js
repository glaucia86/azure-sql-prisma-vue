const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> List All Employees: (GET): localhost:3001/api/v1/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Create a new Employee: (POST): localhost:3001/api/v1/employees
router.post('/employees', employeeController.createEmployee);

// ==> List 'Employee' by Id: (GET): localhost:3001/api/v1/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById);

module.exports = router;