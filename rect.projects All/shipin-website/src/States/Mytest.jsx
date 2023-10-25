import React, { useState } from "react";

export default function Mytest() {
    const [test,setTest]=useState({
        Name:"tosif ansari",
        nb:true
    })
    return(
        <div>
            {/* <button onClick={()=>setTest({test,Name:!test.nb})}>click</button> */}
            
            <button onClick={()=>setTest({...test,nb:!test.nb})}>click</button>
            { test.nb ? <h1>My name</h1> : null}
        </div>
    )
}
// {...data,isImage:!data.isImage}