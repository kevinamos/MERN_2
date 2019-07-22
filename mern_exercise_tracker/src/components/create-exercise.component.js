import React, { Component } from "react";
import DatePicker from "react-datepicker";
//import "react-date-picker/dist/DatePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }
  //called before anything loads
  componentDidMount = () => {
    axios.get("http://localhost:5000/users/").then(res =>
      this.setState({
        users: res.data.map(user => user.username),
        username: ""
      })
    );
  };

  onchangeUsername = e => {
    this.setState({
      username: e.target.value
    });
    console.log(e.target.value);
  };
  onchangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onchangeDuration = e => {
    this.setState({
      duration: e.target.value
    });
  };
  onchangeDate = date => {
    this.setState({
      date: date
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.exercise = {
      username: this.state.username,
      duration: this.state.duration,
      description: this.state.description,
      date: this.state.date
    };
    console.log(this.exercise);
    axios
      .post("http://localhost:5000/exercises/add", this.exercise)
      .then(res => console.log(res.data));

    //window.location = "/";
  };
  render() {
    return (
      <div>
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <select
                ref="userInput"
                className="form-control"
                value={this.state.username}
                onChange={this.onchangeUsername}
              >
                {this.state.users.map(user => {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>description</label>
              <input
                required
                className="form-control"
                type="text"
                value={this.state.description}
                onChange={this.onchangeDescription}
              />
            </div>
            <div className="form-group">
              <label>Duration in mins</label>
              <input
                required
                className="form-control"
                type="text"
                value={this.state.duration}
                onChange={this.onchangeDuration}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onchangeDate}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Exercise Log"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
