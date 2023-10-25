import React from 'react'

import './teststyle.scss';

function Sass_css() {
  return (
    <div>
        
        <h1>Hi i am scss</h1>
        <hr />

        <h1 className='box1'>Hi i am sccs myborderbox</h1>
        <hr />

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>

        <hr />

        <div className='myfont'>Hi i font style</div>
        <hr />

        <div className='mytext'>Hi i am text style</div>
        <hr />


        <button className='button-basic'>BASIC</button>

        <hr />
        <button className='primary'>Primary</button>
        <button className='success'>success</button>
        <button className='danger'>danger</button>
        
    </div>
  )
}

export default Sass_css