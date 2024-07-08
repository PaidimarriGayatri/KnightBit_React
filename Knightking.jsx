import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import Menu from './Menu'
import Franchise from './Franchise'
import "./Knight.css"

const Knightking = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}  />  
          <Route path='/about' element={<About/>}/>
          <Route path='/menu'  element={<Menu/>}/>
          <Route path='/franchise' element={<Franchise/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Knightking