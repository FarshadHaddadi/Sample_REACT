import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';


export default class Teams extends Component {

    constructor() {
        super();
        this.state = {

            teams: []
        }

    }

    componentDidMount() {
        let url = 'https://radiant-refuge-80868.herokuapp.com/teams';
        axios.get(url).then((res) => {
            this.setState({ teams: res.data });
        }).catch((err) => {
            console.log("error");
        });




    }


    render() {

        let mytr = this.state.teams.map((element) => {

            let prjnames = element.Projects.map((elm) => { return (<li>{elm.ProjectName}</li>); })


            return (

                <tr key={element._id} >
                    <td> {element.TeamName} </td>
                    <td>
                        <ul>
                            {prjnames}
                        </ul>
                    </td>
                    <td> {element.Employees.length} Employees</td>
                    <td> {element.TeamLead.FirstName + " " + element.TeamLead.LastName} </td>
                </tr>


            );
        })

        return (
            <div>
                <MainContainer sidebar="Teams" />
                <div className="main_a table-responsive overview-table">
                    <table className="table table-striped table-bordered" align="center">
                        <tbody>
                            <tr >
                                <th>Name</th>
                                <th>Projects</th>
                                <th>Employees</th>
                                <th>Team Lead</th>

                            </tr>
                            {mytr}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }


}