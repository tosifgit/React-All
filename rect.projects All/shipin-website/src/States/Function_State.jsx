import React, {useState} from 'react'
import Image from './Image';

function Function_State() {
    const [name,setName]=useState("Raj Nagar");

    const [pro,setPro]=useState({
      proName:"ipod",
      price:100+"$",

    })

    const [data,setData]=useState({
        userName:"Asif Vohra",
        age:50,
        number:1,
        isImage:true
        });

    
  return (

    <div>
        <button onClick={()=>setName("Akash bihola")}>Change it</button>
        <h1>Hi I am {name}</h1>
        <hr/>
{/* ============================================================= */}
        <button onClick={()=>setData({...data,age:30,userName:"Arman"})}>Change it</button>
        <h1>Hi I am {data.userName} and my age is {data.age}</h1>
        <hr/>
{/* ============================================================= */}
        <button onClick={()=>{
          if (data.number<5) {
            setData({...data,number:data.number+1})
          }
        }}><h1>+</h1></button>

        <h1>{data.number}</h1>
        
        <button onClick={()=>{
          if(data.number>1){
          setData({...data,number:data.number-1})
          }
          }}><h1>-</h1></button>

          <hr/>
{/* ============================================================= */}
          <button onClick={()=>setPro({pro,proName:"Nokia",price:500+"$"})} >click this</button>
          <h1>{pro.proName} price is {pro.price}</h1>      
          <hr/>
{/* ============================================================= */}
          <button onClick={()=>setData({...data,isImage:!data.isImage})}>h/s</button>
          { data.isImage ? <Image/> : null}
{/* ============================================================= */}
    </div>
  )
}

export default Function_State
