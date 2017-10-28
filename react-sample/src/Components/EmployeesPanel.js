import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EmployeesPanel extends Component {
    constructor() {
        super();
        this.state = {

            employees: []




        }

    }

    componentDidMount() {
        let url = 'https://radiant-refuge-80868.herokuapp.com/employees';
        axios.get(url).then((res) => {
            this.setState({ employees: res.data });
        }).catch((err) => {
            console.log("error");
        });

    }

    render() {
        let mytr = this.state.employees.map((element) => {
            return (
                <tr key={element._id} >
                    <td> {element.FirstName + " " + element.LastName} </td>
                    <td> {element.Position.PositionName} </td>
                </tr>
            );
        })


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {mytr}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>

        );

    }
}