import React from 'react'

// normal css import
//import './mycss.css'

// import module css
import raj from './style.module.css'
import mahesh from './style1.module.css'

function MyPage() {
  return (
    <div>
        <h1 className='bigblue'>Hi i am normal in CCS page</h1>
        <h1 className={raj.bigblue}>Hi i am style module CCS page</h1>
        <h1 className={mahesh.bigblue}>Hi i am style1 module CCS page</h1>
    </div>
  )
}

export default MyPage