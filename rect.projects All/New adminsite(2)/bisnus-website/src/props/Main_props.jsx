import React from 'react'
import Func_props from './Func_props'
import Class_props from 'Class_props'

function Main_props() {
  return (
    <div className="container">
        <div className='row'>
            <Func_props img="http://localhost:3001/images/w1.png" title="Titan $300" desc="Titan Men's Watch"/>
            <Func_props img="http://localhost:3001/images/w2.png" title="Fosil $1300" desc="Fosil Men's Watch"/>
            <Func_props img="http://localhost:3001/images/w3.png" title="Fasttrac $450" desc="Fasttrac Men's Watch"/>
            
            <hr />
           
            <Class_props img="http://localhost:3001/images/a-1.jpg" title="Disel $3500" desc="Disel Men's Watch"/>
            <Class_props img="http://localhost:3001/images/a-2.jpg" title="Rado $1300" desc="Rado Men's Watch"/>
            <Class_props img="http://localhost:3001/images/w4.png" title="Sonata $200" desc="Sonata Men's Watch"/>
        
        
        </div>
    </div>
  )
}

export default Main_props