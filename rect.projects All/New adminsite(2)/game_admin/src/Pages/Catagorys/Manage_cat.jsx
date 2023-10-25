
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from 'react'

function Manage_cat() {
    return (
        <div className='content'>
            <div className="col-12">
                <div className="bg-secondary rounded h-100 p-4">
                    <div className="col-12">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Manage Catagorye</h6>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>updated at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsMDVMIyxG59PeCCqtuTMWrlq95nzmSwZa71uONdANciItxOO-CYdcWeTQCmMo1QekSwWblbpsQrU7tBdJh1AgKmn18N_tpdg0BCJEsDKlX37bmdDq3NZVwf2tcl4lmDHssG1CSQ&usqp=CAc" /></td>
                                            <td><a href='#'>Game set</a></td>
                                            <td>
                                                <button className='btn btn-info '>viev</button>
                                                <button className='btn btn-warning '>edit</button>
                                                <button className='btn btn-danger '>delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv8InwG_aMb26T6giVmnTczvGcgqawreIpYB48Uq_xW_VwP73VRSSEd3HBxAE5C2te_8&usqp=CAU" /></td>
                                            <td><a href='#'>Monitor System</a></td>
                                            <td>
                                                <div className="nav-item dropdown">
                                                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown-toggle"><i className="fa fa-laptop me-2" />drp</NavLink>
                                                    <button className='btn text-info dropdown-item'>Mens</button>
                                                    <button className='btn text-info dropdown-item'>Womens</button>
                                                    <button className='btn text-info dropdown-item'>Kids</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Manage_cat