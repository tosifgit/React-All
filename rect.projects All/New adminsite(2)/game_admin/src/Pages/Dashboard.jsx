import React from 'react'

function Dashboard() {
  return (
    <div>
<div className="content">
  {/* Sale & Revenue Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-line fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Today Sale</p>
            <h6 className="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-bar fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Total Sale</p>
            <h6 className="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-area fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Today Revenue</p>
            <h6 className="mb-0">$1234</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-pie fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Total Revenue</p>
            <h6 className="mb-0">$1234</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sale & Revenue End */}
  {/* Sales Chart Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Worldwide Sales</h6>
            <a href>Show All</a>
          </div>
          <canvas id="worldwide-sales" />
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Salse &amp; Revenue</h6>
            <a href>Show All</a>
          </div>
          <canvas id="salse-revenue" />
        </div>
      </div>
    </div>
  </div>
  {/* Sales Chart End */}
  {/* Recent Sales Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="bg-secondary text-center rounded p-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h6 className="mb-0">Recent Salse</h6>
        <a href>Show All</a>
      </div>
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0">
          <thead>
            <tr className="text-white">
              <th scope="col"><input className="form-check-input" type="checkbox" /></th>
              <th scope="col">Date</th>
              <th scope="col">Invoice</th>
              <th scope="col">Customer</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input className="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a className="btn btn-sm btn-primary" href>Detail</a></td>
            </tr>
            <tr>
              <td><input className="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a className="btn btn-sm btn-primary" href>Detail</a></td>
            </tr>
            <tr>
              <td><input className="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a className="btn btn-sm btn-primary" href>Detail</a></td>
            </tr>
            <tr>
              <td><input className="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a className="btn btn-sm btn-primary" href>Detail</a></td>
            </tr>
            <tr>
              <td><input className="form-check-input" type="checkbox" /></td>
              <td>01 Jan 2045</td>
              <td>INV-0123</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>Paid</td>
              <td><a className="btn btn-sm btn-primary" href>Detail</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/* Recent Sales End */}
  {/* Widgets Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0">Messages</h6>
            <a href>Show All</a>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <div className="card" style={{width: '18rem'}}>
              <img style={{backgroundSize: 'cover'}} src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">Game set</h1>
                <p className="card-text">pc game set</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Calender</h6>
            <a href>Show All</a>
          </div>
          {/* bootstrap */}
          <div className="card" style={{width: '18rem'}}>
            <img style={{backgroundSize: 'cover'}} src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-title">Game set</h1>
              <p className="card-text">pc game set</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          {/* bootstrap */}
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">To Do List</h6>
            <a href>Show All</a>
          </div>
          {/* bootstrap */}
          <div className="card" style={{width: '18rem'}}>
            <img style={{backgroundSize: 'cover'}} src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-title">Game set</h1>
              <p className="card-text">pc game set</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          {/* bootstrap */}
        </div>
      </div>
    </div>
  </div>
  {/* Widgets End */}
</div>

{/* =========================================================================================== */}
<div className="content">
  {/* Navbar Start */}
  <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
      <h2 className="text-primary mb-0"><i className="fa fa-user-edit" /></h2>
    </a>
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <form className="d-none d-md-flex ms-4">
      <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
    </form>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fa fa-envelope me-lg-2" />
          <span className="d-none d-lg-inline-flex">Message</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">See all message</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fa fa-bell me-lg-2" />
          <span className="d-none d-lg-inline-flex">Notificatin</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Profile updated</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">New user added</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Password changed</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">See all notifications</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{width: 40, height: 40}} />
          <span className="d-none d-lg-inline-flex">John Doe</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">My Profile</a>
          <a href="#" className="dropdown-item">Settings</a>
          <a href="#" className="dropdown-item">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Widget Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0">Messages</h6>
            <a href>Show All</a>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-0">Jhon Doe</h6>
                <small>15 minutes ago</small>
              </div>
              <span>Short message goes here...</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-0">Jhon Doe</h6>
                <small>15 minutes ago</small>
              </div>
              <span>Short message goes here...</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-0">Jhon Doe</h6>
                <small>15 minutes ago</small>
              </div>
              <span>Short message goes here...</span>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-0">Jhon Doe</h6>
                <small>15 minutes ago</small>
              </div>
              <span>Short message goes here...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Calender</h6>
            <a href>Show All</a>
          </div>
          <div id="calender" />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-secondary rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">To Do List</h6>
            <a href>Show All</a>
          </div>
          <div className="d-flex mb-2">
            <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
            <button type="button" className="btn btn-primary ms-2">Add</button>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm"><i className="fa fa-times" /></button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm"><i className="fa fa-times" /></button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input className="form-check-input m-0" type="checkbox" defaultChecked />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span><del>Short task goes here...</del></span>
                <button className="btn btn-sm text-primary"><i className="fa fa-times" /></button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm"><i className="fa fa-times" /></button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center pt-2">
            <input className="form-check-input m-0" type="checkbox" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm"><i className="fa fa-times" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">Testimonial</h6>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item text-center">
              <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-1.jpg" style={{width: 100, height: 100}} />
              <h5 className="mb-1">Client Name</h5>
              <p>Profession</p>
              <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            </div>
            <div className="testimonial-item text-center">
              <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-2.jpg" style={{width: 100, height: 100}} />
              <h5 className="mb-1">Client Name</h5>
              <p>Profession</p>
              <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} style={{filter: 'grayscale(100%) invert(92%) contrast(83%)', border: 0}} />
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Dashboard