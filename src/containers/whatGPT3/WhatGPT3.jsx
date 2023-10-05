import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is Gpt-3" text="Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Doloremque enim nostrum ex cupiditate 
         quo quae ratione laudantium ut molestias expedita blanditiis eligendi eum velit ad soluta rerum modi iste ducimus, omnis doloribus sit quaerat dolore? Illum vitae tempora hic delectus."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibility are beyound your immagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text= 'Lorem ipsum L possimus nesciunt consequuntur quaerat laboriosam error amet! sit amet consectetur adipisicing elit. Impedit dignissimos dolores soluta quidem fugiat sunt! Odio recusandae nihil deserunt sapiente repellendus eos, nisi deleniti architecto.' />
        <Feature title='Knowledgebase' text= 'Lorem ipsum dquae maxime possimus nesciunt consequuntur quaerat laboriosam error amet! amet consectetur adipisicing elit. Impedit dignissimos dolores soluta quidem fugiat sunt! Odio recusandae nihil deserunt sapiente repellendus eos, nisi deleniti architecto.'/>
        <Feature title='Education' text= 'Lorem Lorem ip nesciunt consequuntur quaerat laboriosam error amet! dolor sit amet consectetur adipisicing elit. Impedit dignissimos dolores soluta quidem fugiat sunt! Odio recusandae nihil deserunt sapiente repellendus eos, nisi deleniti architecto.'/>
      </div>
    </div>
    
  )
}

export default WhatGPT3