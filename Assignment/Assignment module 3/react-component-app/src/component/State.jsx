import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  toggleState = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <div style={{backgroundColor:'lightblue'}}>
        This is state example 
        <p>The state is {this.state.isToggleOn ? 'ON' : 'OFF'}</p>
        
        <button style={{backgroundColor:'red'}} onClick={this.toggleState}>Toggle</button>
      </div>
    );
  }
}

export default State;
