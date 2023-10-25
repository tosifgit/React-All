import React from 'react'

function Add_product() {
  return (
    <div className='content'>
            <div className="container-fluid pt-4 px-">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Product Form</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCatagoryId1" className="form-label">Catagory Id</label>
                                    <input type="number" className="form-control" id="exampleInputnumber1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputDiscription1" className="form-label">Discription</label>
                                    <input type="text" className="form-control" id="exampleInputText1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFileMultiple" className="form-label">upload your image</label>
                                    <input className="form-control bg-dark" type="file" id="formFileMultiple" placeholder='upload your image' multiple />
                                </div>

                                <button type="submit" className="btn btn-primary">add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Add_product