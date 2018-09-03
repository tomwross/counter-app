import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    console.log("Increment clicked!", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
