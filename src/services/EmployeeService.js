import axios from 'axios';

const EMPLOYEE_API = "http://localhost:8080/api/v1/employees";

class EmployeeService  {

    getEmployees () {
        return axios.get(EMPLOYEE_API);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API, employee);
    }

    getEmployeesById (empId) {
        return axios.get(EMPLOYEE_API + "/" + empId);
    }

    updateEmployee(empId, employee) {
        return axios.put(EMPLOYEE_API + "/" + empId, employee);
    }

    deleteEmployee (empId) {
        return axios.delete(EMPLOYEE_API + "/" + empId);
    }
}
export default new EmployeeService();

