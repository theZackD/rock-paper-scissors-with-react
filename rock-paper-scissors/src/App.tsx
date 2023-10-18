import React, { useState } from 'react'
import './App.css'
import Rock from './assets/images/icon-rock.svg'
import Sciss from './assets/images/icon-scissors.svg'
import Paper from './assets/images/icon-paper.svg'

import Header from './components/Header'

const Rps : string = 'ROCK PAPER SCISSORS';
const Rpsls : string = 'ROCK PAPER SCISSORS LIZARD SPOCK';

let score : number = 0

function App() {


  return (
    <>
      <div className='container'>
        <Header gameMode={Rps} score={score}/>
        <div className='Choices'>
          <div className="inside-wrap" id='Paper'>
            <div className="choice"><img src={Paper} alt="" /></div>
          </div>
          <div className="inside-wrap" id='Rock'>
            <div className="choice"><img src={Sciss} alt="" /></div>
          </div>
          <div className="inside-wrap" id='Scissors'>
            <div className="choice"><img src={Rock} alt="" /></div>
          </div>
        </div>
      </div>
      <button className='RULES'>RULES</button>
    </>
  )
}

export default App
