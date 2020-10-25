import React from 'react'
import { Switch, Route } from "react-router-dom";

import SideNavbar from "../../components/SideNavbar";
import PlantList from "../plants/PlantList";
import DepartmentList from "../departments/DepartmentList";

import myImg from "../../images/factory.jpg";

export default function Company() {
    return (
        <>
            <SideNavbar />
            <Switch>
                <Route exact path="/company">
                    <div>
                        <img src={myImg} alt="plant"></img>
                    </div>
                </Route>
                <Route exact path="/company" component={SideNavbar} />
                <Route exact path="/company/plants" component={PlantList} />
                <Route exact path="/company/plants/:id" component={PlantList} />
                <Route exact path="/company/departments" component={DepartmentList} />
                <Route exact path="/company/departments/:id" component={DepartmentList} />
            </Switch>
        </>
    )
}
