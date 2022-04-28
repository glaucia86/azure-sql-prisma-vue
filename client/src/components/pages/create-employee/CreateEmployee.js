/**
 * file: src/components/pages/create-employee/CreateEmployee.js
 * data:
 * description: file responsible for component logic
 *  'CreateEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import { required } from 'vuelidate/lib/validators';
import EmployeeService from '@/services/EmployeeService';

export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employeeForm: {
        name: null,
        job_role: null,
        salary: null,
        employee_registration: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      employee_registration: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewEmployee() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await EmployeeService.createNewEmployee(this.employeeForm);
        this.$swal({
          title: 'Employee added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        this.$swal({
          title: error.message,
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
      }
    },
  },
};
