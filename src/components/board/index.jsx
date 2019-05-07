import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import './styles.css';

export default function Board({ 
  cards, 
  flipped, 
  dimension, 
  handleClick, 
  disabled,
  solved,
 }) {
  return <div className='board'>
            {cards.map((card) => (<Card
            key={card.id}
            id={card.id}
            type={card.type}
            height={dimension / 4.5}
            width={dimension / 4.5}
            back={card.back}
            front={card.front}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
            solved= {solved.includes(card.id)}
            />
            ))}
          </div>
        }

        Board.PropTypes = {
          dimension: PropTypes.number.isRequired,
          cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
          flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
          disabled: PropTypes.bool.isRequired,
          handleClick: PropTypes.func.isRequired,
          solved: PropTypes.arrayOf(PropTypes.number).isRequired,
        }