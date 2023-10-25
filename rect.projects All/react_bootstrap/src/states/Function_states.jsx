import React, { useState } from 'react'

function Function_states() {
    const[info,setInfo]=useState({
        realName:"Naaz",
        number:6,
    });

    return (
    <div>
        <h1>{info.realName ? "Naaz":"Arshi"}</h1>
        <button onClick={()=>setInfo({
            ...info,realName:!info.realName
        })}>change it</button>

        <hr/>

        <button onClick={()=>{
            if (info.number<5) {
                setInfo({...info,number:info.number+1})
            }
        }}>+</button>
        
        <h1>{info.number}</h1>
        
        <button onClick={()=>{
            if (info.number>1) {
                setInfo({...info,number:info.number-1})
            }
        }}>-</button>
    </div>
  )
}

export default Function_states