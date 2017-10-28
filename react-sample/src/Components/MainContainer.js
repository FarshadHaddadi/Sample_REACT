import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

class MainContainer extends Component {

  render() {
    if (this.props.sidebar === "Overview") {
      return (

        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar highlight={this.props.sidebar} />
              <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">{this.props.sidebar}</h1>
                <div className="row">
                  <div className="col-md-4">
                    <ProjectsPanel />
                  </div>
                  <div className="col-md-4">
                    <TeamsPanel />
                  </div>
                  <div className="col-md-4">
                    <EmployeesPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
    else if (this.props.sidebar === "Projects") {
      return (<div>

        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar highlight={this.props.sidebar} />
              <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">{this.props.sidebar}</h1>
                <div className="row">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
    }

    else if (this.props.sidebar === "Teams") {
      return (

        <div>

          <div>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <Sidebar highlight={this.props.sidebar} />
                <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header">{this.props.sidebar}</h1>
                  <div className="row">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }

    else if (this.props.sidebar === "Employees") {
      return (

        <div>

          <div>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <Sidebar highlight={this.props.sidebar} />
                <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header">{this.props.sidebar}</h1>
                  <div className="row">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
    else {
      return (

        <div>

          <div>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <Sidebar highlight="" />
                <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header"><span><strong>Not Found</strong></span></h1>
                  <div className="row">

                    <span> &nbsp;&nbsp;&nbsp;&nbsp;Page Not Found</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MainContainer;