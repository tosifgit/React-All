import React from 'react'
import Function_Props from './Function_Props'
import Class_props from './Class_props'


export default function Main_Props() {
  return (
    <div className='container'>
      <div className='row'>
        
      <Function_Props title="xyz" disc="qwerty/lorem" button="btn btn-secondary text-warning" image="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg"/>
      <Function_Props title="xyz" disc="qwerty/lorem" button="btn btn-info text-warning" image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Function_Props title="xyz" disc="qwerty/lorem" button="btn btn-danger text-warning" image="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg" />      
        <hr/>
      <Class_props title="xyz" disc="qwerty/lorem" button="btn btn-secondary text-warning" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMseA7BYmazbD2d3HXVHaEAmiYP-y74qC_rXflyy2fxA&s"/>
        
      </div>
    </div>
  )
}
