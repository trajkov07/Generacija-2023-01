import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 2,
      secondCounter: 0,
    };
  }

  // this is called when first the component is rendered
  componentDidMount() {
    console.log("This log is from did mount");
  }

  // this is called when we update the component
  componentDidUpdate() {
    console.log("This log is from did update");
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      secondCounter: this.state.secondCounter,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
      secondCounter: this.state.secondCounter,
    });
  };
  // this.state -> read only
  // this.setState -> setting the state

  decrementSecondCounter = () => {
    this.setState({
      counter: this.state.counter,
      secondCounter: this.state.secondCounter - 1,
    });
  };

  render() {
    return (
      <div>
        <p>Number: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={this.decrement}>Decrement Second counter</button>
      </div>
    );
  }
}
