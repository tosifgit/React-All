import React from 'react'

function Login() {
  return (
    <div>
        
<div id="login-page">
  <div className="container">
    <form className="form-login" action="index.html">
      <h2 className="form-login-heading">sign in now</h2>
      <div className="login-wrap">
        <input type="text" className="form-control" placeholder="User ID" autofocus />
        <br />
        <input type="password" className="form-control" placeholder="Password" />
        <label className="checkbox">
          <span className="pull-right">
            <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
          </span>
        </label>
        <button className="btn btn-theme btn-block" href="index.html" type="submit"><i className="fa fa-lock" /> SIGN IN</button>
        <hr />
        <div className="login-social-link centered">
          <p>or you can sign in via your social network</p>
          <button className="btn btn-facebook" type="submit"><i className="fa fa-facebook" /> Facebook</button>
          <button className="btn btn-twitter" type="submit"><i className="fa fa-twitter" /> Twitter</button>
        </div>
        <div className="registration">
          Don't have an account yet?<br />
          <a className href="#">
            Create an account
          </a>
        </div>
      </div>
      {/* Modal */}
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h4 className="modal-title">Forgot Password ?</h4>
            </div>
            <div className="modal-body">
              <p>Enter your e-mail address below to reset your password.</p>
              <input type="text" name="email" placeholder="Email" autoComplete="off" className="form-control placeholder-no-fix" />
            </div>
            <div className="modal-footer">
              <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
              <button className="btn btn-theme" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </form>	  	
  </div>
</div>


    </div>
  )
}

export default Login