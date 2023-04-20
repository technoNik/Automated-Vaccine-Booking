import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from "./images/image-1.jpg";
import image2 from "./images/image-2.jpg";
import image3 from "./images/image-3.jpg";
import image4 from "./images/images-5.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h1>Available Vaccines</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Covaxin is a whole inactivated virus-based COVID-19 vaccine developed by Bharat Biotech in collaboration with the Indian Council of Medical Research National Institute of Virology.'
              label='Bharat Biotech'
              path='/'
              />
            <CardItem
              src={image2}
              text='The Oxford/AstraZeneca COVID 19 vaccine, sold under the brand names Covishield and Vaxzevria among others, is a viral vector vaccine for prevention of COVID-19.'
              label='AstraZeneca'
              path='/'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Sputnik V is an adenovirus viral vector vaccine for COVID-19 developed by the Gamaleya Research Institute of Epidemiology and Microbiology in Russia.'
              label='Gamaleya Research Institute'
              path='/'
              />
            <CardItem
              src={image4}
              text='The Novavax COVID-19 vaccine, sold under the brand names Nuvaxovid and Covovax, among others, is a subunit COVID-19 vaccine developed by Novavax and the Coalition for Epidemic Preparedness Innovations.'
              label='NOVAVAX'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;