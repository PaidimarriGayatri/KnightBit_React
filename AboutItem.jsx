import React from 'react'
import './Knight.css'
const AboutItem = ({loc,img}) => {
  return (
    // <div>AboutItem</div>
    <>
        <pre>
         <b id="b">{loc}</b>  
         <b id="bol">   Hours:</b> <p className='time'>7:00am to 4:00pm</p>
         </pre>  
    </>
  )
}

export default AboutItem