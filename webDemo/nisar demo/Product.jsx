import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function Product() {
  return (
    <div className="col-lg-6 grid-margin stretch-card mt-5">
        <Nav/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Products Details</h4>
      
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Main Price</th>
            <th>Discount Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fancy Kurta</td>
            <td>53275531</td>
            <td>12 May 2017</td>
            <td><label className="badge badge-danger">8999</label></td>
            <td><label className="badge badge-danger">5999</label></td>
          </tr>
          <tr>
            <td>Serwani</td>
            <td>53275532</td>
            <td>15 May 2017</td>
            <td><label className="badge badge-warning">9999</label></td>
            <td><label className="badge badge-warning">7999</label></td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</div>

  )
}

export default Product