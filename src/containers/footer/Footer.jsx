import React from 'react';

import gpt3 from '../../assets/gpt3.jpeg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Do you want to step into the future before others</h1>
        </div>
        <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
        </div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3} />
            <p>20 Uliox Road VI Los Angelos Abuja,<br /> All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>social Media</p>
            <p>Counter</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Get In Touch</h4>
            <p>Gwagwalada, Abuja</p>
            <p>+234-7062174898 </p>
            <p>oluwasegunpanu@gmail.com</p>
          </div>
        </div>

        <div className='gpt3__footer-copyright'>
          <p>© 2023 GPT-3 All right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer