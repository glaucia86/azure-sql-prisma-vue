/**
 * file: src/components/pages/edit-employee/EditEmployee.js
 * data: 01/03/2022
 * description: file responsible for component logic
 *  'EditEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import { format } from 'date-fns';
import EmployeeService from '@/services/EmployeeService';

export default {
  name: 'EditEmployeeComponent',
  data() {
    return {
      employeeForm: {},
    };
  },

  mounted() {
    this.getEmployeeById();
  },

  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params;
      try {
        const response = await EmployeeService.getEmployeeId(id);
        this.employeeForm = { ...response };
      } catch (error) {
        await this.$swal({
          title: error.message,
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
        this.$router.push({
          name: 'list',
        });
      }
    },

    async updateFormEmployee() {
      //  Service call passing properties through 'employeeForm'
      try {
        await EmployeeService.updateEmployee(this.employeeForm);

        await this.$swal({
          title: 'Employee updated successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
      } catch (error) {
        await this.$swal({
          title: error.message,
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
      } finally {
        this.$router.push({
          name: 'list',
        });
      }
    },
  },
};
