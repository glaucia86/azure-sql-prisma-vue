const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> List All Employees: (GET): localhost:3001/api/v1/employees
router.get('/employees', employeeController.listAllEmployees);

module.exports = router;