// @ts-nocheck
/**
 * file: src/components/pages/list-employee/ListEmployee.js
 * data: 01/03/2022
 * description: file responsible for component logic
 *  ListEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import EmployeeService from '../../../services/EmployeeService';

export default {
  name: 'ListEmployeeComponent',
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.listAllEmployees();
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeService.getEmployees();
      this.employees = response;
    },

    async removeEmployee(id) {
      this.$swal({
        title: 'Are you sure you want to delete the employee?',
        text: 'Watch out! This Employee will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await EmployeeService.deleteEmployee(id)
            .then(() => {
              this.$swal('Deleted', 'Successfully deleted', 'success');
            })
            .catch((error) => {
              this.$swal('Deleted', error.message, 'error');
            });
          this.listAllEmployees();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
