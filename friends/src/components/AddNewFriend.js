import React, { Component } from "react";

export default class AddNewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      },
      active: false
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({ friend: this.props.activeFriend, active: true });
    }
  }

  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.active) {
      this.props.updateFriend(e, this.state.friend);
    } else {
      this.props.addFriend(e, this.state.friend);
    }
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      },
      active: false
    });
  };

  render() {
    return (
      <div className="addfriendform">
        <h1>Add New Friend Form</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.changeHandler}
            value={this.state.friend.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.changeHandler}
            value={this.state.friend.age}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.changeHandler}
            value={this.state.friend.email}
          />
          <button>{`${this.state.active ? "Update" : "Add Friend"}`}</button>
        </form>
      </div>
    );
  }
}
