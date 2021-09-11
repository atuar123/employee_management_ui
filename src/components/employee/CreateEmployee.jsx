import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: this.props.match.params.id,
            name:"",
            designation:"",
            email:"",
            contactNo:""
    
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    componentDidMount() {
        console.log(this.state.id);
        if (this.state.id) {
            this.setState({
                pagetitle: "Edit Employee Info"
              })
              EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                console.log(employee);
                this.setState({
                  name: employee.name,
                  designation: employee.designation,
                  email: employee.email,
                  contactNo: employee.contactNo
                });
              });
           
          } else {
            this.setState({
                pagetitle: "Add Employee"
              })
              return
          }

    }

    submitHandler = (event) => {
        event.preventDefault();
        const dataBody = {
            id: this.state.id,
            name: this.state.name,
            designation: this.state.designation,
            email: this.state.email,
            contactNo: this.state.contactNo
        };
        
        if(this.state.id){
            EmployeeService.updateEmployee(this.state.id, dataBody).then( res => {
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.createEmployee(dataBody).then(res =>{
                this.props.history.push('/employees');
            });
        }

    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    cancel() {
        this.props.history.push("/employees");
    }
    render() {
        const {pagetitle}= this.state;
        return (
            <div className="container">
               <h2 className="text-center p-1 font-weight-bold" style={{ fontSize: "22px" }}>{pagetitle}</h2>
                        <div className="col-10">
                            <form className="form" onSubmit={this.submitHandler}>
                                <div className="row">
                                    <label className="col-4 text-right">Name</label>
                                    <div className="col-8 form-group">
                                        <input required value={this.state.name} onChange={this.changeHandler}
                                            name="name"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-4 text-right">Designation</label>
                                    <div className="col-8 form-group">
                                        <input required value={this.state.designation} onChange={this.changeHandler}
                                            name="designation"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-4 text-right">Contact No</label>
                                    <div className="col-8 form-group">
                                        <input required value={this.state.contactNo} onChange={this.changeHandler}
                                            name="contactNo"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-4 text-right">Email</label>
                                    <div className="col-8 form-group">
                                        <input type="email" required value={this.state.email} onChange={this.changeHandler}
                                            name="email"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <button
                                className="btn btn-danger float-right m-1"
                                style={{ marginLeft: "10px" }}
                                onClick={this.cancel.bind(this)}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-success float-right m-1">
                                {this.state.id && <span>Update</span>}{!this.state.id && <span>Save</span>}
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateEmployee;