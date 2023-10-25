import React from 'react'

export default function Function_Props({image,title,disc,button}) {
  return (
    
      
    <div className="container mt-3">

      <div className="card" style={{width: 400}}>
        <img className="card-img-top" src={image} alt="Card image" style={{width: '100%'}} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{disc}</p>
          <a href="#" className={button}>See Profile</a>
        </div>
      </div>
  <br />
</div>




  )
}