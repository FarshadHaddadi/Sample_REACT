import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';
import axios from 'axios';


export default class Projects extends Component {

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
            let enddate = "";
            if (element.ProjectEndDate) {

                enddate = moment(element.ProjectEndtDate).format('LL');

            } else {
                enddate = "n/a";
            }
            return (

                <tr key={element._id} >
                    <td> {element.ProjectName} </td>
                    <td> {element.ProjectDescription}</td>
                    <td> {moment(element.ProjectStartDate).format('LL')} </td>
                    <td> {enddate} </td>
                </tr>


            );
        })

        return (
            <div>
                <MainContainer sidebar="Projects" />
                <div className="main_a table-responsive overview-table">
                    <table className="table table-striped table-bordered" align="center">
                        <tbody>
                            <tr >
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>

                            </tr>
                            {mytr}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}