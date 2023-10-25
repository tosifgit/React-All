import React from 'react'

function Manage_contact() {
  return (
    <div className="content m-xxl-5 text-center">
        <h2>Manage contact</h2>
    <p>Mamage contact</p>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>Mobile</th>
                <th>coment</th>
                <th>created at</th>
                <th>updated at</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Jhony sins</td>
                <td>jony@brazzers.com</td>
                <td>9876543210</td>
                <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor!</td>
                <td>31-11-2020</td>
                <td>01-02-2023</td>
            </tr>
        </tbody>
    </table></div>
  )
}

export default Manage_contact