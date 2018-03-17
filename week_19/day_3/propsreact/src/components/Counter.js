import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = (direction) => {
    this.setState({ count: (direction === "up") ? this.state.count + 1 : this.state.count - 1});
  }

  // handleDecrement = () => {
  //   this.setState({count: this.state.count - 1});
  // }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={() => this.handleIncrement('up')}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={() => this.handleIncrement('down')}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
