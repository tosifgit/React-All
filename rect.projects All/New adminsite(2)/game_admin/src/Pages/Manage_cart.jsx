import React from 'react'

function Manage_cart({tt}) {
    return (
        <div className="content m-xxl-5 text-center">
        
            <title>{tt}</title>
            
            <h2>Manage Cart</h2>
            <p>Mamage Cart</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>id</th>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>costomer Id</th>
                        <th>created at</th>
                        <th>updated at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="rounded-circle" src="https://m.media-amazon.com/images/I/71it2biogSS._SX425_.jpg" alt style={{ width: 40, height: 40 }} /></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>$99/-</td>
                        <td>4</td>
                        <td>31-11-2020</td>
                        <td>01-02-2023</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Manage_cart