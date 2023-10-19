// import React, { FC } from 'react'

interface HProps {
    gameMode : string;
    score : number;
}

const Header = ({gameMode, score} : HProps) => {
  return (
    <>
      <header>
          <p className='Title'>{gameMode}</p>
          <div className='Score-container'>
            <p id='scoreLabel'>Score</p>
            <p id='Score'>{score}</p>
          </div>
        </header>
    </>
  )
}

export default Header
