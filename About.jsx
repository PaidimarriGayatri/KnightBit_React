import React from 'react'
import './Knight.css'
import img1 from './Images/bannerabout.webp'
import img2 from './Images/food-strip.webp'
import img3 from './Images/app-menu.webp'
import img4  from './Images/burger.webp'
import AboutItem from './AboutItem'
import img5 from './Images/instagram.svg'
import img6 from './Images/facebook.svg'
import img7 from './Images/linkedin.svg'
import img8 from './Images/youtube.svg'
import { About_Data } from './About_Data'
const About = () => {
  return (
   <>
   <img src={img1} alt=""  className='about'/>
   <p id="cont1">Knight Bite is a cloud kitchen which delivers food to the nocturnals
    giving equal emphasis on food,technology and logistics.</p>
     
    <div id="div1">
        <img src={img2} alt="" id="food"/>
        <p id="cont2">Knight Bite started with the idea to serve all the hungry nocturnals <br/> who find it really difficult to order late night muchies. KB brought <br/> together late night eaters and helped them order delicious meals at <br/> their convenience via Knight Bite App and call.</p>
    </div>

    <div id="div2">
      <p id="cont4">Knight Bite is one such concept which was highly successful in adapting to the emerging market.<br /><br />  <br /> <br />
      Biters (customers), accepted and loved the KB app that made theordering process much more easier. In two weeks of the release of the
      app, it was trending on top food apps and was downloaded by more than
      5000 users across Mangalore and Manipal.
      </p>
        <img src={img3} alt="" id="abtimg3"/>
    </div>

     <div id="div3">
        <img src={img4} alt="" id="abtimg4"/>
        <p id="cont5">Going forward, our aim is to help and bring smiles in many more <br/> faces and cover many more cities across India and around the <br/> world.</p>
    </div>

    <div id="loc">
      <h1 id="loch1">Locations</h1>
      {About_Data.map(({loc})=>{
          return <AboutItem loc={loc} key={loc}  />  
      })}
      </div>
      
      <div id="botapps">
    <h1 className="follow">Follow us</h1><br/><br/>
                    <div  id="profile">
                        <a href="https://www.instagram.com/knight_bite/">
                        <img src={img5} alt="" className='ig'/>
                        </a>
                        <a href="https://m.facebook.com/knightbiteIndia/ ">
                        <img src={img6} alt="" className='ig'/>
                        </a>
                        {/* <a href="https://mobile.twitter.com/knight_bite">
                        <img src="res/twitter.svg" alt="" className='ig'/>
                        </a> */}
                        <a href="https://lu.linkedin.com/company/knightbite">
                        <img src={img7} alt="" className='ig'/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCbUM8v6bBtX8mcVFazJ9IQw">
                        <img src={img8} alt="" className='ig'/>
                        </a>
                    </div>
                    </div>
        <h6 id="pink" style={{marginTop:"180px"}}>Ⓒ Copyright 2023. Knight Bite Foods Pvt. Ltd. All Rights Reserved</h6>  

   </>
  )
}

export default About