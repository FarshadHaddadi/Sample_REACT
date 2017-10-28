import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class TeamsPanel extends Component {
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
            return (
                <tr key={element._id} >
                    <td> {element.TeamName} </td>
                    <td> {element.Employees.length} Employees </td>
                </tr>
            );
        })
        return (

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {mytr}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>

        );
    }
}