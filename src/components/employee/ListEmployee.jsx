import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

class ListEmployee extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
    
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data})
        })

    }

    addEmployee(){
        this.props.history.push("/add-employee")
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`)
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    
    render() {
        return (
            <div  className="container">
                 <h3 className="text-center">All Employee List</h3>
                <div> 
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact No.</th>
                                <th>Designation</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.contactNo}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">update</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;