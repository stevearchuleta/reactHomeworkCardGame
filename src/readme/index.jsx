import React from 'react'
import Tech from './tech'
import Chapters from './chapters'
import Github from './github'

export default function Readme() {
  return (
    <div>
      <h1>UC Davis Trilogy Week 19 Homework</h1>
      <h2>Building a Memory Game Tutorial for Steve Archuleta</h2>
      <p>
      Building a REACT card memory game, where flower images are displayed on the screen and as the user 'flips' them, two at a time, if there is a match, the cards stay face up. If not, they revert after a couple of seconds to face down and the game continues until the user gets all the matches.
      </p>

      <Tech />
      <Chapters />
      <Github />
    </div>
  )
}
