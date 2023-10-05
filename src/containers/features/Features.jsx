import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData =[
  {
    title: 'Improving and distrust instatly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quisquam veritatis, aliquam quia ratione sequi accusamus! Modi, fuga distinctio.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quisquam veritatis, aliquam quia ratione sequi accusamus! Modi, fuga distinctio.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quisquam veritatis, aliquam quia ratione sequi accusamus! Modi, fuga distinctio.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quisquam veritatis, aliquam quia ratione sequi accusamus! Modi, fuga distinctio.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future is Now and You Need To Realize it. Step into Future Today & Make it happen</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='gpt3__features-container'>
          {featuresData.map((item, index) =>  (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features