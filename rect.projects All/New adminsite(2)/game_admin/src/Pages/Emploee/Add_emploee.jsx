import React from 'react'

function Add_emploee() {
    return (
        <div className='content'>
            <div className="container-fluid pt-4 px-">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Basic Form</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                                    <input type="name" name='name' className="form-control" id="exampleInputname1" aria-describedby="nameHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputNumber1" className="form-label">Mobile Number</label>
                                    <input type="number" name='number' className="form-control" id="exampleInputNumber1" />
                                </div>
                                <fieldset classname="row mb-3 ">
                                    <div classname="form-check">
                                        <input classname="form-check-input" name='male' type="radio" id="gridRadios2" defaultvalue="option2" />
                                        <label classname="form-check-label" htmlfor="gridRadios2">
                                            Male
                                        </label>
                                    </div>
                                    <div classname="col-sm-10">
                                        <div classname="form-check">
                                            <input classname="form-check-input" name='female' type="radio" id="gridRadios1" defaultvalue="option1" defaultchecked />
                                            <label classname="form-check-label" htmlfor="gridRadios1">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <br />
                                </fieldset>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" name='t&c' className="form-check-input" id="exampleCheck1" />
                                    <div id="emailHelp" className="form-text">Accept Terms & Condition</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFileMultiple" className="form-label">upload your image</label>
                                    <input name='image' className="form-control bg-dark" type="file" id="formFileMultiple" placeholder='upload your image' multiple />
                                </div>

                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_emploee