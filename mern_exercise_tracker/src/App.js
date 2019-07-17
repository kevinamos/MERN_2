import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navabar.component";
import ExercisesList from "./components/exercises-list.component.js";
/*import EditExercise from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component.js";*/
//import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={ExercisesList} />
      </div>
    </Router>
  );
}

export default App;

/**<Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} /> --> */
