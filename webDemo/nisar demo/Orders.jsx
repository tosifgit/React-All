import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'

function Orders() {
  return (
    <div className="col-lg-12 stretch-card mt-5">
    <Nav/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Order Details</h4>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th> Id </th>
            <th> Custmer Id </th>
            <th> Cart Id </th>
            <th> Address </th>
            <th> PinCode </th>
            <th> Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <td> 1 </td>
            <td> #25148924 </td>
            <td> #25697452 </td>
            <td> Juhapura, Ahmedabad </td>
            <td> 380055 </td>
            <td> Pending </td>
          </tr>
          <tr className="table-warning">
            <td> 2 </td>
            <td> #85841957 </td>
            <td> #25311535 </td>
            <td> Bapunagar, Ahmedabad </td>
            <td> 380024 </td>
            <td> Delivered </td>
          </tr>      
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</div>
  )
}

export default Orders