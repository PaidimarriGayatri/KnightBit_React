import React from 'react'
import image1 from './Images/app-link-background.svg'
import "./Knight.css"
import img1 from './Images/google-play-badge.svg'
import img2 from './Images/iphone.svg'
import img3 from './Images/burgerboy.webp'
import img4 from './Images/banner-2.webp'
import img5 from './Images/mail_icon.svg'
import img6 from './Images/phone_icon.svg'
import img7 from './Images/media-email-btn.svg'
import img8 from './Images/instagram.svg'
import img9 from './Images/facebook.svg'
import img10 from './Images/linkedin.svg'
import img11 from './Images/youtube.svg'
import img12 from './Images/brand_logo-1_footer.svg'
import img13 from './Images/kb_footer.png'
import { Features } from './Features'
import FeaturesItems from './FeaturesItems'
const Home = () => {
  return (
    <div>
        <img src={image1} alt="eror" className='burger' />
        <h3 className="head">Deliciousness, One Click Away!</h3>
        <button className='btn2'>Order on Web</button>
        <h3 className="or">Or</h3>
      <a href="https://apps.apple.com/in/app/knight-bite-food-delivery-app/id1387840512"> <img src={img1} alt=""  className='iosstore'/ ></a>
     <a href="https://play.google.com/store/apps/details?id=com.axndxsoftwarehub.knightbite&amp;hl=en"> <img src={img2} alt=""  className='andriod'/></a>
     <div className='rev'>
      <h1 className='heade'>Features</h1>
      <div className='div2'>
        {Features.map(({src,para})=>{
          return <FeaturesItems src={src} para={para} key={src}/>
        })}
      </div>
     </div>
    {/* ============================= */}
     {/* section3 */}

     <div className='rev1'>
      <img src={img3} alt="" className='burgerboy' />
      <h2 id="joy">Enjoy food, enjoy life</h2>
     </div>
     {/* ============================== */}
     {/* section4 */}

     <div>
      <img src={img4} alt="" className='cakes' />
      <h2 className='bug'>Burger,fries,shakes <br /> and many more</h2>
      <a href="#"><button className='btnmenu'>See Full Menu</button></a>
     </div>

     {/* section 5 */}

     <div className='rev3'>
      <h1 className='foot'>Connect with us</h1>
      <h4 className='sub'>Contact us</h4> <br /> <br />
       <img src={img5} alt=""  className='msg'/>
       <h3 className='para1'>info@Knight-bite.com</h3> <br /> <br />
       <img src={img6} alt="" className='call' />
       <h3 className='para1'>+918047106107</h3> <br /> <br />

       {/* <p id='pm'>Available from 7pm to 4am</p> */}
       <h3 id='quick'>Quick links</h3>
       <ul itemType='disc' id='list'>
        <li className='li'>Delivery Policies <a href="#"></a></li> <br />
       <li className='li'>Privacy Policies  <a href="#"></a></li> <br />
       <li className='li'>Careers(Coming Soon)</li> <br />
       <li className='li'>Franchies  <a href="#"></a></li>
       </ul>
        <br />
        <p id="para3">Enter your email address below to be the first to<br/>know everything about us, where we’ll be next, and how you can<br/>come along!<br/>Join us on our adventure.</p>
       <input type="text" id='input' placeholder='Enter your email address' /> <br />
       <img src={img7} alt=""  id='bot'/><br />
       <h3 className="h3">Head Office</h3> 
       <p id="p4">1st Floor, No 20-1-7/10, Regal Square Azizuddin Road, Bunder Mangalore, Bunder, Mangaluru, Dakshina Kannada, Karnataka, 575001</p><br/>
        <h6 id="h6">Locations</h6>
        <ul><li id="li3">Bengaluru, Mangalore, Mysuru, Hyderabad, Hubli, Manipal, Udupi</li></ul>
          <h3 id="follow">Follow us</h3><br/><br/>

          <div className='profile'>
             <img src={img8} alt=""  className='imh'/>
             <img src={img9} alt="" className='imh' />
             <img src={img10} alt=""  className='imh'/>
             <img src={img11} alt=""  className='imh'/>
            
          </div>
           <br />
           <img src={img12} alt="" className='brand' /> 
           <img src={img13} alt=""  className='kbfoot'/>
     </div>
     <h6 id="pink">Ⓒ Copyright 2023. Knight Bite Foods Pvt. Ltd. All Rights Reserved</h6>
    </div>

    
  )
}

export default Home