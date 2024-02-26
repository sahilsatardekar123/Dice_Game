import React, { useState } from 'react';
import TotalScore from './TotalScore';
import SelectNumber from './SelectNumber';
import styled from 'styled-components';
import RoleDices from './RoleDices';
import { Button } from '../Styled/Button';
import { OutlineButton } from '../Styled/Button';
import Rules from './Rules';

function PlayGame() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState ("")
  const [showRules, setRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectNumber) {
      setError("You have not selected any number")
      return
    }
    

    const randomNo = generateRandomNumber(1, 7);
    setCurrentDice(randomNo);
    
    if (selectNumber === randomNo)
    {
      setScore((prev) => prev + randomNo);
    }
    else
    {
      setScore((prev) => prev -2);
    }
    setSelectNumber(undefined)
  };
  const Reset = () => {
    setScore(0);
    setError("");
  }

  return (
    <Container>
      <div className='top_section'>
        <TotalScore score={score} />
        <SelectNumber selectNumber={selectNumber} setSelectNumber={setSelectNumber} error={error}
        setError={setError}/>
      </div>
      <RoleDices currentDice={currentDice} rollDice={rollDice} />
      <div className='btns'>
      <OutlineButton onClick={Reset}>Reset Game</OutlineButton>
      <Button onClick={() => setRules((prev) => !prev)}>{
        !showRules ? "Show" : "Hide"
        } {" "}Rules</Button>
      </div>
       { showRules &&  <Rules/>}
    </Container>
  );
}

export default PlayGame;

const Container = styled.div`
  /* height: calc(100vh - 90px); */
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
`;
