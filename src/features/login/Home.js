import React, { Component } from "react";
import fire from "../../config/Fire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideNavbar from "../../components/SideNavbar";
import StartupScreen from "../../components/StartupScreen";
import PlantList from "../plants/PlantList";

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
          <SideNavbar />

          <Switch>
            <Route exact path="/company/plants" component={PlantList} />
            <Route exact path="/company/plants/:id" component={PlantList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
