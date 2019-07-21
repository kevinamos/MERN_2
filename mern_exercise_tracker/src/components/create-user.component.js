import React, { Component } from "react";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: ""
    };
  }
  onchangeUsername(e) {
    this.setState({
      username: e.target.value
    });
    console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.user = {
      username: this.state.username
    };
    console.log(this.user);
    //window.location = "/";
    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Create New User</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                required
                className="form-control"
                type="text"
                value={this.state.username}
                onChange={this.onchangeUsername}
              />
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
