import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer1'>
      <h3>ABOUT US</h3>
      <ul>
        <li> Contact Us</li>
        <li> About Us</li>
        <li> Careers</li>
        <li>Press </li>
        <li> Flipkart Wholesale</li>
     </ul>  
      </div>

      <div className='footer1'>
      <h3>POLICY</h3>
      <ul>
        <li> Terms Of Use</li>
        <li> Security</li>
        <li> Privacy</li>
        <li> Sitemap</li>
        <li> Cancellation & Returns</li>
     </ul>  
      </div>
      <div className='footer1'>
      <h3>SOCIAL</h3>
      <ul>
        <li> Facebook</li>
        <li> Twitter</li>
        <li> Youtube</li>
        <li> Linkedin</li>
        <li> Instagram</li>
     </ul>  
      </div>
      <div className='footer1'>
      <h3>CONTACT US</h3>
      <input type='email' placeholder='abc@123'/><br/><br/>
      <input type='submit' id='Submit' value={'SEND'}/>
      </div>
    </div>
  )
}

export default Footer
