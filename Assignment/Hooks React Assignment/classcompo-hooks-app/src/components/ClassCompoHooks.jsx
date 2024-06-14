//Example of Hooks in class Components


import React, { Component } from 'react';

class ClassCompoHooks extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
      data: null,
    };
  }

  
  componentDidMount() {
    console.log('Component did mount: Fetching data');

    // Simulate fetching data
    setTimeout(() => {
      this.setState({ data: 'Fetched Data' });
    }, 2000);
  }

  //Runs after the component updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log('Component did update: Data has changed');
    }
  }


  componentWillUnmount() {
    console.log('Component will unmount: Cleanup');
  }

  // Method to increment count
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Class Component with State and Effect</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <p>Data: {this.state.data ? this.state.data : 'Loading...'}</p>
      </div>
    );
  }
}

export default ClassCompoHooks;
