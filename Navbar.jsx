import React from 'react'
import img from './Images/img1.png'
import "./Knight.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div id='div'>
       <div className='demo'>
       <img src={img} alt="error" className='demo' />
       <div className='dem'>
       <Link to="/" className='lin' >Home</Link>  &nbsp;&nbsp;
        <Link to="/about" className='lin' >About</Link> &nbsp;&nbsp;
        <Link to="/menu"   className='lin'>Menu</Link>&nbsp; &nbsp;
        <Link to="/franchise" className='lin' >Franchise</Link>
       </div>
       <div>
        
       </div>
       </div>
       
       
        </div>
  
   </>
  )
}

export default Navbar