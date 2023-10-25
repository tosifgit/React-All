import React from 'react'

function Func_props({img,title,desc}) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-5">
                <img className="card-img-top" src={img} alt="Card image" style={{ width: '100%' }} height="350px" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>

    )
}

export default Func_props