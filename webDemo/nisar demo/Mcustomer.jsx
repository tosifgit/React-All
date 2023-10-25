import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function Mcustomer() {
  return (
   <div className="col-12 grid-margin stretch-card mt-5">
    <Nav/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Basic Customer Details</h4>
      <form className="forms-sample">
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail3">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword4">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelectGender">Gender</label>
          <select className="form-control" id="exampleSelectGender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>File upload</label>
          <input type="file" name="img[]" className="file-upload-default" />
          <div className="input-group col-xs-12">
            <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
            <span className="input-group-append">
              <button className="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputCity1">City</label>
          <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea1">Textarea</label>
          <textarea className="form-control" id="exampleTextarea1" rows={4} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
    <Footer/>
  </div>
  
</div>

  )
}

export default Mcustomer