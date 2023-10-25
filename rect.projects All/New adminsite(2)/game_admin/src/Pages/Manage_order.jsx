import React from 'react'

function Manage_order() {
  return (
<div className="content m-xxl-5 text-center">
            <h2>Manage Order</h2>
            <p>Mamage Order</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Costomer Id</th>
                        <th>Cart Id</th>
                        <th>address</th>
                        <th>Amount</th>
                        <th>pincode</th>
                        <th>staus</th>
                        <th>created at</th>
                        <th>updated at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                        <td>$99/-</td>
                        <td>380028</td>
                        <td>Delevered</td>
                        <td>31-11-2020</td>
                        <td>01-02-2023</td>
                    </tr>
                </tbody>
            </table>

        </div>
  )
}

export default Manage_order