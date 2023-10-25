import React from 'react'

function ManageProduct() {
    return (
            <div className="content m-xxl-5 text-center">
    <h2>Manage product</h2>
    <p>Mamage product</p>            
    <table className="table table-hover">
      <thead>
        <tr>
          <th>-</th>
          <th>id</th>
          <th>Product Name</th>
          <th>discription</th>
          <th>MRP</th>
          <th>Discounted price</th>
          <th>status</th>
          <th>created at</th>
          <th>updated at</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img className="rounded-circle" src="https://m.media-amazon.com/images/I/71it2biogSS._SX425_.jpg" alt style={{ width: 40, height: 40 }} /></td>
          <td>1</td>
          <td>MONITOR</td>
          <td>this is a Discription</td>
          <td>12000/</td>
          <td>9999/</td>
          <td>in stock</td>
          <td>31-11-2020</td>
          <td>01-02-2023</td>
        </tr>
        </tbody>
        </table>

        </div>
    )
}

export default ManageProduct