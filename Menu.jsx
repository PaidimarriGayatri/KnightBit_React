import React from 'react'
import img1 from './Images/bannermenu.webp'
import img2 from './Images/burger-icon 1.png'
import img3 from './Images/starters-icon 2.png'
import img4 from './Images/main-course-icon 3.png'
import img5 from './Images/drinks-icon4.png'
import img6 from './Images/wrap-icon 5.png'
import img7 from './Images/desserts-icon6.png'
import img8 from './Images/add-icon.svg'
import './Knight.css'
const Menu = () => {
  return (
   <>
    
      <div className="content">
      <img src={img1} alt="" className='bannt'/>
      <div className="menu">
          <div className="menu-item" data-category="0">
            <img src={img2}  alt='img'/>
            <h1>Burgers</h1>
            <img src={img8} alt='img' />
          </div>
          <div className="menu-item" data-category="1">
            <img src={img3} alt='img'/>
            <h1>Fries/Starters</h1>
            <img src={img8} alt='img' />
          </div>
          <div className="menu-item" data-category="2">
            <img src={img4}  alt='img'/>
            <h1>Main Course</h1>
            <img src={img8}  alt='img'/>
          </div>
          <div className="menu-item" data-category="3">
            <img src={img5} alt='img' />
            <h1>Drinks</h1>
            <img src={img8}  alt='img'/>
          </div>
          <div className="menu-item" data-category="4">
            <img src={img6} alt='img' />
            <h1>Wraps</h1>
            <img src={img8} alt='img' />
          </div>
          <div className="menu-item" data-category="5">
            <img src={img7} alt='img' />
            <h1>Desserts</h1>
            <img src={img8}  alt='img'/>
          </div>
        </div>
      </div>

     
   </>
  )
}

export default Menu