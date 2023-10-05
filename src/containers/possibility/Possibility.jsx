import React from 'react';

import possibilityimage from '../../assets/possibilityimage.jpg';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src={possibilityimage} alt="possibilityimage" />
        </div>
        <div className='gpt3__possibility-content'>
            <h4>Request Early Access to Get Started</h4>
            <h1 className='gradient__text'>The possibility are beyound your immagination</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aliquam quis, eius perferendis quae placeat architecto veritatis vel tempora minus.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  );
}

export default Possibility