import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function AddEmployee() {
  return (
    <div className="container-fluid page-body-wrapper mt-5">
      <Nav />
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary text-white me-2">
                <i className="mdi mdi-home" />
              </span> Add Employee
            </h3>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className='col-md-12'>
              <div className="col-lg-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Employees Details Given Below</h4>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th> Id </th>
                          <th> Name </th>
                          <th> Email </th>
                          <th> Password </th>
                          <th> Mobile No. </th>
                          <th> Image </th>
                          <th> Status </th>
                          <th> Created At</th>
                          <th> Updated At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-info">
                          <td> 1 </td>
                          <td> Nisar Shaikh</td>
                          <td> nisarshaikh848@gmail.com</td>
                          <td> ********</td>
                          <td> 9427970065</td>
                          <td> <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" /></td>
                          <td> Active </td>
                          <td> December 15, 2010 </td>
                          <td> 11/10/2023 </td>
                        </tr>
                        <tr className="table-warning">
                          <td> 2 </td>
                          <td> Messsy Adam </td>
                          <td> Flash </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                          <td> <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" /></td>
                          <td> July 1, 2015 </td>
                          <td> July 1, 2015 </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


            </div>

          </div>


        </div>
        <Footer />
      </div>
      {/* main-panel ends */}
    </div>

  )
}

export default AddEmployee