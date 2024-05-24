import React, { Component } from "react";

class ClassCompo extends Component{
    render()
    {
        return(
        <div> 
        
            
        <h1>Hello, {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
        </div>
    )
}
}


class Greeting extends Component {
    render() {
      return (
        <div>
       
          <ClassCompo name="Ishita" age={22} />
          <ClassCompo name="Gargee" age={27} />
          <ClassCompo name="Akta" age={26} />
        </div>
      );
    }
  }
  
  export default Greeting;