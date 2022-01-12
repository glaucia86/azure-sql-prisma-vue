/**
 * file: src/services/EmployeeService.js
 * data: 01/03/2022
 * description: file responsible for the Apis requests by HTTP
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import Api from './Api';

export default {
  /**
   * Create a new 'Employee'
   * (POST): localhost:3001/api/v1/employees
   */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * List All 'Employees'
   * (GET): localhost:3001/api/v1/employees
   */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * List 'Employee' by Id
   * (GET): localhost:3001/api/v1/employees/:id
   */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Update 'Employee' by Id
   * (PUT): localhost:3001/api/v1/employees/:id
   */
  async updateEmployee(employee) {
    try {
      const id = employee.employee_id;
      const response = await Api().put(`/employees/${id}`, employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Delete 'Employee' by Id
   * (DELETE): localhost:3001/api/v1/employees/:id
   */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
