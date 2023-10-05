import React from 'react';
import './header.css';

import people from '../../assets/people.jpg';
import ai from '../../assets/ai.jpg';
import image from '../../assets/image.jpg';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Let's Build Something amazing with GPT3 OPenAi
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam, dolor rerum voluptatibus veniam placeat vel nobis tenetur aperiam eligendi odio unde accusamus fuga praesentium quia saepe temporibus hic. Dolor, omnis tenetur provident earum maiores voluptatem laudantium quas incidunt ex, recusandae totam quam. Architecto consequuntur reprehenderit veniam ullam, cumque incidunt?</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Adress' />
            <button type='button'>Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <img src={ai} alt="ai" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='gpt3__header_image'>
            <img src={image} alt="image" />
          </div>
    </div>
  )
}

export default Header