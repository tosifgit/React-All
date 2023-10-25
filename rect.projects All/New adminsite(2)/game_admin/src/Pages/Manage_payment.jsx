import React from 'react'

function Manage_payment() {
  return (
<div className="content m-xxl-5 text-center">
            <h2>Manage Payments</h2>
            <p>Mamage Payments</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Transiction Id</th>
                        <th>Order Id</th>
                        <th>Costomer ID</th>
                        <th>Amount</th>
                        <th>created at</th>
                        <th>updated at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>$99/-</td>
                        <td>31-11-2020</td>
                        <td>01-02-2023</td>
                    </tr>
                </tbody>
            </table>

        </div>
  )
}

export default Manage_payment