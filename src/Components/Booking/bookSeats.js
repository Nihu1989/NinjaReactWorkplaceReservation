import React, { Component } from "react";

class BookSeats extends Component {
  state = {
    selectedSeat: null,
    seat: [
      { value: "1", name: "Seat 1", isReserved: false, isDisabled: false },
      { value: "2", name: "Seat 2", isReserved: false, isDisabled: false },
      { value: "3", name: "Seat 3", isReserved: false, isDisabled: false },
      { value: "4", name: "Seat 4", isReserved: false, isDisabled: false },
      { value: "5", name: "Seat 5", isReserved: false, isDisabled: false },
      { value: "6", name: "Seat 6", isReserved: false, isDisabled: false },
      { value: "7", name: "Seat 7", isReserved: false, isDisabled: false },
      { value: "8", name: "Seat 8", isReserved: false, isDisabled: false },
      { value: "9", name: "Seat 9", isReserved: false, isDisabled: false },
    ],
  };
  onClickSeat = (seat) => {
    let newseats = this.state.seat.map((S) => {
      if (seat.value === S.value) {
        return { ...seat, isReserved: !seat.isReserved };
      }
      return S;
    });
    seat = !seat.isReserved ? seat : null;
    this.setState({ seat: newseats, selectedSeat: seat });
    this.props.selectedSeat(seat);
  };
  render() {
    return (
      <div>
        <label>Seat Reservation System</label>
        <div className="container">
          <table className="grid">
            <tbody>
              <tr>
                {this.state.seat.map((s) => (
                  <td
                    className={s.isReserved ? "reserved" : "available"}
                    key={s.value}
                    onClick={() =>
                      !s.isDisabled &&
                      (!this.state.selectedSeat ||
                        this.state.selectedSeat.value == s.value)
                        ? this.onClickSeat(s)
                        : alert("You can book only one seat at a time")
                    }
                  >
                    {s.name}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col col-md-6">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Available Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.seat.map((res) => (
                    <tr key={res.value}>
                      {!res.isReserved ? <td>{res.name}</td> : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col col-md-6">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Reserved Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.seat.map((res) => (
                    <tr key={res.value}>
                      {res.isReserved ? <td>{res.name}</td> : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSeats;
