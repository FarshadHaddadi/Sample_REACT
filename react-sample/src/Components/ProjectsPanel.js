import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class ProjectsPanel extends Component {
    constructor() {
        super();
        this.state = {

            projects: []




        }

    }

    componentDidMount() {
        let url = 'https://radiant-refuge-80868.herokuapp.com/projects';
        axios.get(url).then((res) => {
            this.setState({ projects: res.data });
        }).catch((err) => {
            console.log("error");
        });




    }

    render() {

        let mytr = this.state.projects.map((element) => {
            return (

                <tr key={element._id} >
                    <td> {element.ProjectName} </td>
                    <td> Active {moment().diff(moment(element.ProjectStartDate), 'days')} Days </td>
                </tr>
            );
        })

        return (

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {mytr}

                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}