import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function Cart() {
  return (
  <div className="col-lg-12 stretch-card mt-5">
    <Nav/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Cart Details</h4>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th> Id </th>
            <th> Product Id </th>
            <th> Quantity </th>
            <th> Amount </th>
            <th> Customer Id </th>
            <th> Created at </th>
            <th> Updated at </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <td> 1 </td>
            <td> Herman Beck </td>
            <td> Photoshop </td>
            <td> $ 77.99 </td>
            <td> May 15, 2015 </td>
            <td> May 15, 2015 </td>
            <td> May 15, 2015 </td>
          </tr>
          <tr className="table-warning">
            <td> 2 </td>
            <td> Messsy Adam </td>
            <td> Flash </td>
            <td> $245.30 </td>
            <td> July 1, 2015 </td>
            <td> July 1, 2015 </td>
            <td> July 1, 2015 </td>
          </tr>      
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</div>

  )
}

export default Cart