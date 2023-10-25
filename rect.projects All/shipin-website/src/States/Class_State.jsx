import React, { Component } from 'react';
import Image from './Image';

export default class Class_State extends Component {
    constructor(){
        super();
        this.state={
            name:"Rajesh Nagar",
            username:"tosif @gmail.com",
            age:"20",
            number:0,
            isImage:true,
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=> this.setState({age:25,username:"abc.@com"})}>Change it</button>
        <h1>Hi I am {this.state.username} my age is {this.state.age}</h1>

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

        <button onClick={()=>this.setState({isImage:!this.state.isImage})}>hide/show</button>
        { this.state.isImage ? <Image/> : null }

      </div>
    )
  }
}
