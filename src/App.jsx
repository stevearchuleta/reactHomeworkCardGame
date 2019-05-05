import React, { useState } from 'react'
import Card from './components/card'

// {useState} feature above allows for the use of a getter-method inside an array at the top of this App function; flipped gets the state and setFlipped sets the state
export default function App() {
  const [flipped, setFlipped] = useState([]);

  const handleClick = (id) => setFlipped([...flipped, id]);


  return (
    <div>
      <h1>Week 19: REACT Homework Memory Card Game Tutorial for Steve Archuleta</h1>
      <h2>Concentrate! Can you remember where the cards are?</h2>
      <Card
        id={1}
        height={100}
        width={100}
        back={`/img/Mendocino-Wildflowers.jpg`}
        front={`img/react.png`}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
        />
    </div>
  )
}
