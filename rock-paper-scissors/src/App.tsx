import React, { useState } from 'react'
import './App.css'

//Image imports

import Rules from './assets/images/image-rules.svg'
import CloseIcon from './assets/images/icon-close.svg'
import Triangle from './assets/images/bg-triangle.svg'

// Component imports:

import Header from './components/Header'
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'

//React Code:

const Rps : string = 'ROCK PAPER SCISSORS';
const Rpsls : string = 'ROCK PAPER SCISSORS LIZARD SPOCK';

let score : number = 0 

function App() {

  const [Rules_isClicked, setRules_isClicked] = useState<boolean>(false)

  let HandleClickRules : () => void = function(){
    setRules_isClicked(true)
  }

  let RULESBOOK = function(Rules_isClicked : boolean){

    if (Rules_isClicked){
      return ( 
        <div className="rules-con-con">
        <div className='Rules-container'>
          <div className="RHead">
            <p id='Ruletxt'>RULES</p>
            <img id="Close" onClick={HandleClickClose} src={CloseIcon} alt="" />
          </div>
          <img id='RuleImg' src={Rules} alt="" />
        </div>
      </div> )
    } else {
      return (
        <></>
      )
    }
    }

  let HandleClickClose : () => void = function(){
    setRules_isClicked(false)
  }

  let isShownChoice : boolean = true

  let Choices = function(isShownChoice : boolean){
    
    if(isShownChoice){
      return (
        <div className='Choices'>
          <div className="topchoices">
            <div id="pap">
              <Paper />
              <div className="hover-wrap"></div>
            </div>
            <div id="Sciss">
              <Scissors />
              <div className="hover-wrap"></div>
            </div>
          </div>
          <div id="Rck">
            <Rock />
            <div className="hover-wrap"></div>
          </div>
          <img id='Triangle' src={Triangle} alt="" />
        </div>
      )
    } else {
      return (
        <></>
      )
    }

  }

  return (
    <>
      <div className='container'>
        <Header gameMode={Rps} score={score}/>
        {Choices(isShownChoice)}
        {RULESBOOK(Rules_isClicked)}
      </div>
      <button className='RULES' onClick={HandleClickRules}>RULES</button>
    </>
  )
}

export default App
