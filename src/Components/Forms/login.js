import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  //this.name = this.name.bind(this);
  //this.password = this.password.bind(this);

  //this.onChange = this.onChange.bind(this);
  //this.onSubmit = this.onSubmit.bind(this);

  // onChange = (event) => {
  //   const input = event.target;
  //   const name = input.name;
  //   const password = input.passsword;
  //   this.setState({ [name]: password });
  // };

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit = (event) => {
    console.log(this.state.email, this.state.password);
    event.preventDefault();
    //https://ninjapsapi.azurewebsites.net/api/v1/seats
    //https://seatbookingapininja.azurewebsites.net/api/v1/bookings
    fetch("http://localhost:5000/api/v1/auth/login", {
      //fetch("https://ninjapsapi.azurewebsites.net/api/v1/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log("result", result.success, result.data);
        if (result.success == false) {
          alert(result.data);
        } else {
          // this.props.history.push("/BookingForm", {
          //   email: this.state.email,
          //});
          this.props.history.push("/BookingForm", {
            state: this.state.email,
          });
        }
      });
  };

  render() {
    return (
      <Form className="login-form" onSubmit={this.handleFormSubmit}>
        <h1 clasname="text-centre"> Login page </h1>

        <br></br>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="name"
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
              placeholder="Password"
              name="password"
              value={this.password}
              onChange={this.onChangePassword}
            />
          </div>
        </div>

        <br></br>

        <div className="form-group row ">
          <div className="col-sm-5 center ">
            <Button className="btn-sm btn-dark btn-block">Log in</Button>
          </div>
        </div>

        <p className="forgot-password text-right">
          New user <a href="/Signup">Sign Up?</a>
        </p>
      </Form>
    );
  }
}

export default Login;
