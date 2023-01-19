import stuffImage from '../assets/images/Cat.png';

/**
 * 
 * @param {object} stuff 
 * @returns 
 */

import React, { useState } from 'react';

export default function Stuff({ stuff, selected }) {
  let convertedWeight = stuff.weight.toString().replace('.', ',');

  const [isSelected, setIsSelected] = useState(selected);

  const [isHovered, setIsHovered] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsSelected(prev => !prev);
  }

  const onMouseEnterHandler = () => {
    setIsHovered(prev => !prev);
  }

  const onMouseLeaveHandler = () => {
    setIsHovered(prev => !prev);
  }

  return (
    <div className='stuff'>
      <div onMouseEnter={onMouseEnterHandler} 
      onMouseLeave={onMouseLeaveHandler} className={`stuff-card ${isSelected ? 'stuff-card_selected' : ''} ${stuff.count <= 0 ? 'stuff-card_count' : ''}`} onClick={onClickHandler}>
        <div className='stuff__image'>
          <img src={ stuffImage } alt='' />
        </div>
        <div className='stuff__type'>{ isHovered && isSelected ? 'Котэ не одобряет?' : stuff.type }</div>
        <h3 className='stuff__title'>{ stuff.title }</h3>
        <strong className='stuff__compound'>{ stuff.compound }</strong>
        <div className='stuff__kit'>
          { stuff.kit.map((item, index) => {
            let onlyNumbers = /\d+/g;
            let onlyStrings = /\D+/g;
            return (
              <p key={index}>
                <strong>{item.match(onlyNumbers)}</strong>
                <span>{item.match(onlyStrings)}</span>
              </p>
            );
          })}
        </div>
        <div className='stuff__weight'>
          <p>{ convertedWeight }</p>
          <small>кг</small>
        </div>
      </div>
      <div className='stuff-extra'>
        <p className={`stuff-extra__text ${stuff.count <= 0 ? 'stuff-extra__text_count':  ''}`}>
          {(!isSelected && stuff.count > 0) ? (
            <>
              Чего сидишь? Порадуй котэ, <a href="/" className='stuff-extra__link link' onClick={onClickHandler}>купи.</a>
            </>
          ) : (
            stuff.count <= 0 ? (
              <>
                Печалька, {stuff.compound} закончился.
              </>
            ) : (
              stuff.ingridients
            )
          )}
        </p>
      </div>
    </div>
  );
}