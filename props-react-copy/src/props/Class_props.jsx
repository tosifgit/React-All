import React, { Component } from 'react'

export class Class_props extends Component {

    constructor(props){
        super(props)
        this.props=props;
    }

  render() {
    return (
      
        
      <div className="col-md-4 mb-5">
        
        <div className="card" style={{ width: 350 }}>
          <img className="card-img-top" src={this.props.img} alt="Card image" style={{ width: '100%' }} />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.disc}</p>
            <a href="#" className={this.props.button}>See Profile</a>
          </div>
        </div>

      </div>
      

      
    )
  }
}

export default Class_props