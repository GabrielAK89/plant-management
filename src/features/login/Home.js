import React, { Component } from "react";
import fire from "../../config/Fire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import myImg from "../../images/factory.jpg";
import "./Home.css"

import StartupScreen from "../../components/StartupScreen";

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
        {/* <button
          className="logoutButton btn btn-secondary btn-lg"
          onClick={this.logout}
        >
          Logout
        </button> */}

        <Router>
          <StartupScreen handleLogout={this.logout}/>
          <Switch>
            <Route path="/company" component={Company} />
            <Route exact path="/">
              <div>
                <img src={myImg} alt="plant" className="startup-img"></img>
              </div>
            </Route>
            <Route exact path="/reporting">
              <div>
                <img src={myImg} alt="plant" className="startup-img"></img>
              </div>
            </Route>
            <Route exact path="/materials">
              <div>
                <img src={myImg} alt="plant" className="startup-img"></img>
              </div>
            </Route>
            <Route exact path="/quality">
              <div>
                <img src={myImg} alt="plant" className="startup-img"></img>
              </div>
            </Route>
            <Route exact path="/maintenance">
              <div>
                <img src={myImg} alt="plant" className="startup-img"></img>
              </div>
            </Route>
          </Switch>
        </Router>
        <div class="footer">
          <p>&copy; Plant Manager - Agile Hub FrontEnd Course 2020 </p>
        </div>
      </div>
    );
  }
}

export default Home;
