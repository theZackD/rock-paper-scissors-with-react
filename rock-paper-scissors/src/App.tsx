import React, { SyntheticEvent, useState } from 'react'
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

function App() {

  const [score, setscore] = useState<number>(0)

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

  let RockPick : JSX.Element = <div className="pulse-wrap">
                                  <div className="outside-wrap" id='rock-wrap'>
                                    <Rock />
                                  </div>
                                </div>
  let PaperPick : JSX.Element = <div className="pulse-wrap">
                                  <div className="outside-wrap" id='paper-wrap'>
                                    <Paper />
                                  </div>
                                </div>
  let ScissPick : JSX.Element = <div className="pulse-wrap">
                                  <div className="outside-wrap" id='scissors-wrap'>
                                    <Scissors />
                                  </div>
                                </div>

  let ChoiceArray : JSX.Element[] = [RockPick, ScissPick, PaperPick]
  let ChoiceHouse : string[] = ['R','S','P']

  const [PlayerPick, setPlayerPick] = useState<JSX.Element>(RockPick)
  const [HousePick, setHousePick] = useState<JSX.Element>(RockPick)

  let Player : string = ''
  let House : string = ''

  const [isShownChoice, setisShownChoice] = useState<boolean>(true)
  const [isShownPick, setisShownPick] = useState<boolean>(false)
  const [isShownButton, setisShownButton] = useState<boolean>(false)
  const [isShownHousePick, setisShownHousePick] = useState<boolean>(false)

  const Win_Text : JSX.Element = <p id='WIN-LOSE'>YOU WIN</p>
  const Lose_Text : JSX.Element = <p id='WIN-LOSE'>YOU LOSE</p>
  const Tie_Text : JSX.Element = <p id='WIN-LOSE'>IT'S A TIE</p>

  const [Win_Lose, setWin_Lose] = useState<JSX.Element>(Win_Text)

  const Check_Winner : () => void = function(){
    if((House == 'R' && Player == 'P') || (House == 'P' && Player == 'S')){
      setWin_Lose(Win_Text)
      setscore(score + 1)
    } else if (House == Player){
      setWin_Lose(Tie_Text)
    } else {
      setWin_Lose(Lose_Text)
      setscore(score - 1)
    }

  }

  let HandleMakeChoice : (e: SyntheticEvent) => void = function(e){
    if((e.target.id === 'P')){
      setPlayerPick(PaperPick)
    } else if((e.target.id === 'R')){
      setPlayerPick(RockPick)
    } else {
      setPlayerPick(ScissPick)
    }

    Player = e.target.id

    let rdnumber : number = Math.floor(Math.random()*3)
    let RdHousePick = ChoiceArray[rdnumber]

    House = ChoiceHouse[rdnumber]

    setHousePick(RdHousePick)
    setisShownChoice(false)
    setisShownPick(true)
    setTimeout(() => {Check_Winner()}, 2999);
    setTimeout(() => {setisShownHousePick(true)}, 2000);
    setTimeout(() => {setisShownButton(true)}, 3000);
  }

  const HandleClickPlay : () => void = function(){
    setisShownButton(false);
    setisShownChoice(true);
    setisShownHousePick(false);
    setisShownPick(false)
  }

  let ShowHouse : (isShownHousePick : boolean) => JSX.Element = function(isShownHousePick){
    if(isShownHousePick){
      return (
        HousePick
      )
    } else {
      return (
        <></>
      )
    }
  }

  let Choices = function(isShownChoice : boolean){
    
    if(isShownChoice){
      return (
        <div className='Choices'>
          <div className="topchoices">
            <div id="pap" onClick={HandleMakeChoice}>
              <Paper />
              <div className="hover-wrap" id='P'></div>
            </div>
            <div id="Sciss" onClick={HandleMakeChoice}>
              <Scissors />
              <div className="hover-wrap" id='S'></div>
            </div>
          </div>
          <div id="Rck" onClick={HandleMakeChoice}>
            <Rock />
            <div className="hover-wrap" id='R'></div>
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



  let ShowButton = function(isShownButton : boolean){
    if(isShownButton){
      return (
        <div className="Again">
          {Win_Lose}
          <button className='Play' onClick={HandleClickPlay}>PLAY AGAIN</button>
        </div>
      )
    } else {
      return (<></>)
    }
  }

  let Pick = function(isShownPick : boolean){
    if(isShownPick){
      return (
        <div className="Move-wrapper">
          <div className="player-pick">
            <p className='picktext'>YOU PICKED</p>
            {PlayerPick}
          </div>

            {ShowButton(isShownButton)}

          <div className="cpu-pick">
            <p className='picktext'>THE HOUSE PICKED</p>
            {ShowHouse(isShownHousePick)}
          </div>
        </div>
      )
    } else {
      <></>
    }
  }

  return (
    <>
      <div className='container'>
        <Header gameMode={Rps} score={score}/>
        {Pick(isShownPick)}
        {Choices(isShownChoice)}
        {RULESBOOK(Rules_isClicked)}
      </div>
      <button className='RULES' onClick={HandleClickRules}>RULES</button>
    </>
  )
}

export default App
