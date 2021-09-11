import axios from "axios";

const base_url = "http://localhost:8080/api/v1";

class EmployeeService{

    getEmployees(){
        return axios.get(base_url + "/employees");
    }

    createEmployee(employee){
        return axios.post(base_url + "/save", employee);
    }

    getEmployeeById(employeeId){
        return axios.get(base_url + '/getEmployee/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(base_url + '/update/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(base_url + '/deleteEmployee/' + employeeId);
    }

}
export default new EmployeeService();