import React from 'react'

function New() {
  return (
    <div class="content">

<div class="col-12 content">

<table class="table">
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
                <button className='btn btn-info '>viev</button>
                <button className='btn btn-warning '>edit</button>
                <button className='btn btn-danger '>delete</button>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv8InwG_aMb26T6giVmnTczvGcgqawreIpYB48Uq_xW_VwP73VRSSEd3HBxAE5C2te_8&usqp=CAU" /></td>
            <td><a href='#'>CPU System</a></td>
            <td>
                <button className='btn btn-info '>viev</button>
                <button className='btn btn-warning '>edit</button>
                <button className='btn btn-danger '>delete</button>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv8InwG_aMb26T6giVmnTczvGcgqawreIpYB48Uq_xW_VwP73VRSSEd3HBxAE5C2te_8&usqp=CAU" /></td>
            <td><a href='#'>speaker System</a></td>
            <td>
                <button className='btn btn-info '>viev</button>
                <button className='btn btn-warning '>edit</button>
                <button className='btn btn-danger '>delete</button>
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://m.media-amazon.com/images/I/81UpUljWprL.jpg" /></td>
            <td><a href='#'>Mouse / Keyboard</a></td>
            <td>
                <button className='btn btn-info '>viev</button>
                <button className='btn btn-warning '>edit</button>
                <button className='btn btn-danger '>delete</button>
            </td>
        </tr>
        <tr>
            <td>#</td>
            <td><img className="rounded-circle" alt style={{ width: 40, height: 40 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv8InwG_aMb26T6giVmnTczvGcgqawreIpYB48Uq_xW_VwP73VRSSEd3HBxAE5C2te_8&usqp=CAU" /></td>
            <td>
                <input type="email" className="form-control border-danger" id="exampleInputEmail1" aria-describedby="addCatogeryHelp" placeholder='add new catogers' />
            </td>
            <td>
                <button className='btn btn-success '>explore</button>
            </td>
        </tr>
    </tbody>
</table>

</div>

    </div>
  )
}

export default New