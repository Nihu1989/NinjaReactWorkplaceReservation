import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSignupFormSubmit = (event) => {
    console.log(this.state.name, this.state.email, this.state.password);
    event.preventDefault();
    //fetch("https://ninjapsapi.azurewebsites.net/api/v1/auth/register", {
      fetch("http://localhost:5000/api/v1/auth/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: "user",
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.success == true) {
          alert("Sign up success. Please login");
          this.props.history.push("/Login");
        } else {
          alert(result.data);
        }
      });
  };

  render() {
    return (
      <form className="Signup-form" onSubmit={this.handleSignupFormSubmit}>
        <h1 clasname="text-centre"> Sign Up page</h1>

        <br></br>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Please enter your name"
              value={this.name}
              onChange={this.onChangeName}
            />
          </div>
        </div>

        <br></br>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">EMail</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Please enter email ID"
              value={this.email}
              onChange={this.onChangeEmail}
            />
          </div>
        </div>

        <br></br>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              placeholder="Please enter password with minimum of six digits"
              value={this.password}
              onChange={this.onChangePassword}
            />
          </div>
        </div>

        <br></br>

        <div className="form-group row ">
          <div className="col-sm-5 center ">
            <Button className="btn-sm btn-dark btn-block">Register</Button>
          </div>
        </div>

        <p className="forgot-password text-right">
          Already registered <a href="/Login">sign in?</a>
        </p>
      </form>
    );
  }
}

export default Signup;
