import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

const image1 = require('../../../assets/images/Birthday Countdown.png');
const image2 = require('../../../assets/images/5PLogix.png');
const image3 = require('../../../assets/images/brw4.png');
const image4 = require('../../../assets/images/Github finder.png');
const image5 = require('../../../assets/images/Property Managment.png');
const image6 = require('../../../assets/images/class selector.png');
const image7 = require('../../../assets/images/Newletter.png');
const image8 = require('../../../assets/images/DailySmarty.png');
// const image9 = require('../../../assets/images/5PLogix.png');

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              image={image1}
              text='ReactJs'
              label = 'Birthday Countdown App'
              path = '/birthday'
            />
            <CardItem
              image={image2}
              text='Html, Bootstrap, Javascript'
              label = '5P Logix Website'
              path = '/5plogix'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              image={image3}
              text='Html, Bootstrap, Javascript'
              label ='Beautiful Responsive Web'
              path = '/brw'
            />
            <CardItem
              image={image4}
              text='NodeJs, ExpressJs'
              label='Github Profiler'
              path = '/gitf'
            />
            <CardItem
              image={image5}
              text='ReactJs'
              label='Property Manager App'
              path = '/propm'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              image={image7}
              text='Html, NodeJs, ExpressJs'
              label ='Newsletter Signup'
              path = 'https://www.beautifulresponsiveweb.com'
            />
            <CardItem
              image={image8}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Daily Smarty'
              path = 'dailysmarty'
            />
            <CardItem
              image={image6}
              text='ReactJs, Redux'
              label = 'Shedule Selecter'
              path = 'Scheduler'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Cards;
