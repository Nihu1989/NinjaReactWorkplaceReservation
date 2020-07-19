import React, { Component } from "react";
import Homepage from "./homepage";
import BookSeats from "./bookSeats";
import axios from "axios";
import { Link } from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";

class BookingForm extends Component {
  state = {
    email: null,
    check: true,
    seatsInfo: [],
    result: [],
    datefrom: null,
    dateto: null,
    distictCity: [],
    seatuniqueid: "",
    selectedSeat: "",
    selectedCity: "",
    selectedSite: "",
    selectedPhase: "",
    selectedFloor: "",
  };
  submitData = () => {
    console.log("Submitting This Data ", {
      ...this.state,
      seatuniqueid: this.GetUniqeSeatNumber(),
    });
  };
  onSelect = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.setState({ check: this.check() });
    });
  };
  GetUniqeSeatNumber = () => {
    if (!this.check()) {
      let initials = this.state.selectedSite.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      initials +=
        this.state.selectedPhase +
        this.state.selectedFloor +
        this.state.selectedSeat;

      return initials;
    } else return null;
  };
  check = () => {
    if (
      this.state.datefrom &&
      this.state.dateto &&
      this.state.selectedCity &&
      this.state.selectedFloor &&
      this.state.selectedPhase &&
      this.state.selectedSite
    ) {
      return false;
    }
    return true;
  };
  selectedSeat = (val) => {
    this.setState({ selectedSeat: val ? val.value : null }, () => {
      this.setState({ check: this.check() });
    });
  };
  componentWillMount() {
    axios
      .get(`http://localhost:5000/api/v1/seats`)
      .then((res) => {
        const result = res.data.data;
        this.setState({ result });
      })
      .catch((err) => console.log(err));
    const e = this.props.location.state;
    this.setState({
      //result: data.data,
      email: e.state,
    });
  }
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="navbar-nav ml-auto">
            <Link to="/login" className="nav-item nav-link">
              Logout
            </Link>
          </div>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col col-md-2 col-sm-12">
              <Homepage {...this.state} onSelect={this.onSelect} />
            </div>
            <div className="col col-md-8 col-sm-12">
              <BookSeats {...this.state} selectedSeat={this.selectedSeat} />
            </div>
            <div className="col col-md-2 col-sm-12">
              Select Date
              <div className="form-group p-2 m-auto">
                <label>From</label>
                <DayPickerInput
                  onDayChange={(day) =>
                    this.setState({ datefrom: day }, () => {
                      this.setState({ check: this.check() });
                    })
                  }
                />
                <label>To</label>
                <DayPickerInput
                  onDayChange={(day) =>
                    this.setState({ dateto: day }, () => {
                      this.setState({ check: this.check() });
                    })
                  }
                />
                <button
                  disabled={this.state.check}
                  onClick={this.submitData}
                  className="btn p-2 mt-5 btn-outline-success btn-block"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BookingForm;
