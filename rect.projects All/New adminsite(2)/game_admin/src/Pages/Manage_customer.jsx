import React from 'react'

function Manage_customer() {
    return (
        <div className="content m-xxl-5 text-center">
            <h2>Manage costomer</h2>
            <p>Mamage costomer</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>gender</th>
                        <th>email</th>
                        <th>Mobile</th>
                        <th>Password</th>
                        <th>created at</th>
                        <th>updated at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className='rounded-circle' style={{height:40,width:40}} src="img/testimonial-2.jpg" alt="img" /></td>
                        <td>1</td>
                        <td>Jhony Doe</td>
                        <td>male</td>
                        <td>jony@domain.com</td>
                        <td>9876543210</td>
                        <td>P@$$word</td>
                        <td>31-11-2020</td>
                        <td>01-02-2023</td>
                    </tr>
                </tbody>
            </table></div>)
}

export default Manage_customer