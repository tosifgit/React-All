import React from 'react'

function Add_cat() {
  return (
    <div className='content'>
            <div className="container-fluid pt-4 px-">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Basic Form</h6>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="catagoryeName" className="form-label">Name </label>
                                    <input type="name" className="form-control" name='catagoryeName' id="exampleInputname1" aria-describedby="nameHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFileMultiple" className="form-label">upload catagorye image</label>
                                    <input name='catagorye' className="form-control bg-dark" type="file" id="formFileMultiple" placeholder='upload your image' multiple />
                                </div>

                                <button type="submit" className="btn btn-primary">Add catagorye</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Add_cat