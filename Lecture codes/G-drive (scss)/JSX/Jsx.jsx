import React from 'react'

import './comp_style.css'


function Jsx() {

  var name="Rajesh Nagar";  

  const myelement = <h1>I Love JSX!</h1>; 
  
  const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>; 

  const myelement2 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  const mystyle={color:'red',backgroundColor:'yellow'}
  

  return (
    <div>
        <h1>{"Hi hello"}</h1>
        <h1>{5+5}</h1>
        <h1>Hi my name is : {name}</h1>

        <hr />
        <h1>{myelement}</h1>
        <h1>{myelement1}</h1>
        <h1>{myelement2}</h1>


        <h1 style={{color: 'red'}}>Hi i am inline css</h1>

        <h1 style={mystyle}>Hi i am internal css</h1>

        <h1 className='bigblue'>Hi i am External css</h1>
        <h1 class='bigblue'>Hi i am External css</h1>
    </div>
  )
}

export default Jsx