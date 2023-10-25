import React, { Component, useState } from 'react'

export default class Class_State extends Component {
    constructor(){
        super();
        this.state={
            name:"Rajesh Nagar",
            number:1,
            isTage:true,
        }
    }
  render() {
    return (
      <div>
        <h1>Hi I am {this.state.name} my age is {this.state.number}</h1>
        <button onClick={()=> this.setState({name:"tosif ahmed",number:20})}>Change it</button>

        <hr/>

        <button onClick={()=>{
          if (this.state.number<5) {
            this.setState({number:this.state.number+1})
          }
        }} >+</button>

          <h1>{this.state.number}</h1>

        <button onClick={()=>{
          if (this.state.number>1) {
            this.setState({number:this.state.number-1})
          }
        }} >-</button>

        <hr/>

        <button onClick={()=>this.useState({isTage:!this.state.isTage})}>clickme</button>
        { this.state.isTage ? <h1>true</h1> : <h1>false</h1> }

      </div>
    )
  }
}
