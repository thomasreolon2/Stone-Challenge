import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/navbar.component";
import ActivitiesList from "./components/ActivitiesScreen/activities-list.component";
import EditActivity from "./components/EditActivityScreen/edit-activity.component";
import CreateActivity from "./components/CreateActivityScreen/create-activity.component";
import CreateEmployee from "./components/CreateEmployeeScreen/create-employee.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ActivitiesList} />
        <Route path="/edit/:id" component={EditActivity} />
        <Route path="/create" exact component={CreateActivity} />
        <Route path="/employee" component={CreateEmployee} />
      </Switch>
    </Router>
  );
}

export default App;
