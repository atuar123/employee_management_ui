import React, { Component } from 'react';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: this.props.match.params.id || "",
            name:"",
            designation:"",
            email:"",
            contactNo:""
    
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    componentDidMount() {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    cancel() {
        this.props.history.push("/employees");
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center"><h2>Add Employee</h2></div>
        <div className="col-6">
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