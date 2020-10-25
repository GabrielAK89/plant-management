import React, { Component } from "react";
import fire from "../../config/Fire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import myImg from "../../images/factory.jpg";

import SideNavbar from "../../components/SideNavbar";
import StartupScreen from "../../components/StartupScreen";
import PlantList from "../plants/PlantList";
import DepartmentList from "../departments/DepartmentList";
import Company from "../production/Company"

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <button
          className="logoutButton btn btn-secondary btn-lg"
          onClick={this.logout}
        >
          Logout
        </button>

        <Router>
          <StartupScreen />
          <Switch>
            <Route path="/company" component={Company} />
            <Route exact path="/">
              <div>
                <img src={myImg} alt="plant"></img>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
