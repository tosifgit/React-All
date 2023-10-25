import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function ManageEmployee() {
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
              </span> Manage Employee
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
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> Id</th>
                          <th> Name </th>
                          <th> E-mail </th>
                          <th> Password</th>
                          <th> Mobile No. </th>
                          <th> Image </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1">
                            #1
                          </td>
                          <td> Nisar Shaikh </td>
                          <td>
                            nisarshaikh848@gmail.com
                          </td>
                          <td> $ 77.99 </td>
                          <td> 94279 70065</td>
                          <td> <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" /> </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> Messsy Adam </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> John Richards </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $138.00 </td>
                          <td> Apr 12, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-4.png" alt="image" />
                          </td>
                          <td> Peter Meggik </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                          </td>
                          <td> Edward </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $ 160.25 </td>
                          <td> May 03, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> John Doe </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-info" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $ 123.21 </td>
                          <td> April 05, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="../../assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> Henry Tom </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </td>
                          <td> $ 150.00 </td>
                          <td> June 16, 2015 </td>
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

export default ManageEmployee