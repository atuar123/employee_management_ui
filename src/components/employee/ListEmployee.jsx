import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

class ListEmployee extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            employees:[]
        }

    }

    componentDidMount() {
    
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data})
        })

    }
    
    render() {
        return (
            <div  className="container">
                 <h3>All Employee List</h3>
                <div className="container">
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
                                                <button className="btn btn-info">update</button>
                                                <button className="btn btn-danger">delete</button>
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