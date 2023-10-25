import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function Payment() {
  return (
    <div className="col-lg-12 grid-margin stretch-card mt-5">
      <Nav />
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Inverse table</h4>
          <p className="card-description"> Add class <code>.table-dark</code>
          </p>
          <table className="table table-dark">
            <thead>
              <tr>
                <th> #Id </th>
                <th> Transaction Id </th>
                <th> Order Id </th>
                <th> Customer Id </th>
                <th> Amount </th>
                <th> Created At </th>
                <th> Updated At </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> A215985624 </td>
                <td> 2145697524 </td>
                <td> 2145867168 </td>
                <td> 5500 INR </td>
                <td> Oct 9, 2023 </td>
                <td> Oct 11, 2023 </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td> L569877412 </td>
                <td> 2541265154</td>
                <td> 8964712356 </td>
                <td> 3550 INR </td>
                <td> Sep 30, 2023 </td>
                <td> Oct 03, 2023 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Payment