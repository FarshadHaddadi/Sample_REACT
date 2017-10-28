import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';


export default class Employees extends Component {

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
                    <td> {element.FirstName + " " + element.LastName + "-" + element.Position.PositionName} </td>
                    <td> {element.AddressStreet + " " + element.AddressState + " " + element.AddressCity + " " + element.AddressZip} </td>
                    <td> {element.PhoneNum} ext: {element.Extension}</td>
                    <td> {moment(element.HireDate).format('LL')} </td>
                    <td> &#36;{element.SalaryBonus}</td>
                </tr>


            );
        })

        return (
            <div>
                <MainContainer sidebar="Employees" />
                <div className="main_a table-responsive overview-table">
                    <table className="table table-striped table-bordered" align="center">
                        <tbody>
                            <tr >
                                <th>Name &amp; Position</th>
                                <th>Address</th>
                                <th>Phone Num</th>
                                <th>Hire Date</th>
                                <th>Salary Bonus</th>

                            </tr>
                            {mytr}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }


}