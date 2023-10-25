import React, { Component } from 'react'

export class Class_state extends Component {
    constructor(){
        super();
        this.state={
            name:"Arsya",
            age:5,
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({age:!this.state.age})}>click this</button>
        {this.state.age ? "Arshia" : "Naaz"}  
      </div>
    )
  }
}

export default Class_state