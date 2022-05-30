import React from 'react';
import './Footer.css';
import facebook from '../../../images/facebook.png';
import insta from '../../../images/insta.png';
import twitter from '../../../images/twitter.png';
import pinterest from '../../../images/pinterest.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-color mt-5'>
            <div className='mt-3'>
            <div className='container text-light'>
  <div className="row row-cols-4">
    <div className="col">
        <h4 className='mt-4'>Explore</h4>
        <p>Home</p>
        <p>Item</p>
        <p>New Arrival</p>
        <p>Brands</p>
    </div>
    <div className="col">
        <h4 className='mt-4'>Vist</h4>
        <p>Uttor Badda <br /> Shadhinata Sharani,<br /> House No- 282<br />Dhaka Bangladesh <br />1212</p>
    </div>
    <div className="col">
        <h4 className='mt-4'>Follow</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Pinterest</p>
        <p>Instragram</p>
    </div>
    <div className="col">
        <h4 className='mt-4'>Contact</h4>
        <h5>Mehruz Saif</h5>
        <p>Phone No: 01900000001</p>
        <p>Email: abc@rocketmail.org</p>
    </div>
  </div>
</div>
            </div>
            <div  id='footer' className='text-center mt-2'>
            <img style={{width: '30px'}} src={insta} alt="" />
            
            <img style={{width: '30px', marginLeft: '10px'}} src={pinterest} alt="" />
            <img style={{width: '30px', marginLeft: '10px'}} src={twitter} alt="" />
            <img style={{width: '30px', marginLeft: '10px'}} src={facebook} alt="" />
            <p className='text-light mt-2'>All RIGHT ARE RESERVED</p>
            <p id='foot' className='text-light'>The Mellow Saffron ©  {year} </p>
            </div>
            
        </footer>
    );
};

export default Footer;