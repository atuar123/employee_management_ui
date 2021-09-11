import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: this.props.match.params.id,
            employee: {}
        }

    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })

    }

    render() {
        return (
            <div>
<br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                    <div className="row">
                                    <label className="col-4 text-right">Name: </label>
                                    <div className="col-8 form-group">
                                     { this.state.employee.name }
                                    </div>
                                </div>
                        <div className = "row">
                            <label className="col-4 text-right">Designation: </label>
                            <div className="col-8 form-group"> { this.state.employee.designation }</div>
                        </div>
                        <div className = "row">
                            <label className="col-4 text-right"> Email: </label>
                            <div className="col-8 form-group"> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label className="col-4 text-right"> Contact No: </label>
                            <div className="col-8 form-group"> { this.state.employee.contactNo }</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;