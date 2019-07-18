import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Exercise Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav  mr-auto">
            <li className="navbar-item mr-auto">
              <Link to="/" className="nav-link ">
                Exercises
              </Link>
            </li>
            <li className="navbar-item mr-auto">
              <Link to="/create" className="nav-link">
                {" "}
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item mr-auto">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item mr-auto">
              <Link to="/edit" className="nav-link">
                Edit Exercises
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
