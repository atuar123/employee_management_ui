import axios from "axios";

const base_url = "http://localhost:8080/api/v1";

class EmployeeService{

    getEmployees(){
        return axios.get(base_url + "/employees");
    }

}
export default new EmployeeService();