import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PlantList from "./features/plants/PlantList";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <SideNavbar />

        <Switch>
          <Route exact path="/company/plants" component={PlantList} />
          <Route exact path="/company/plants/:id" component={PlantList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
