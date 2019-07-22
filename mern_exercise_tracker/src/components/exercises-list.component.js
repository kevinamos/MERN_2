import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//exercise component implemented as a functional react component
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}> Edit </Link>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(res =>
        this.setState({
          exercises: res.data
        })
      )
      .catch(error => {
        console.log(error);
      });
  }
  //delete an exercise
  deleteExercise = id => {
    axios
      .get("http://localhost:5000/exercises/" + id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      exercises: this.state.exercises.filter(el => el.id !== id)
    });
  };

  myExercisesList = () => {
    return this.state.exercises.map(current_exr => {
      return (
        <Exercise
          exercise={current_exr}
          //deleteExercise={this.deleteExercise()}
          key={current_exr._id}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h3>Logged exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.myExercisesList()}</tbody>
        </table>
      </div>
    );
  }
}
