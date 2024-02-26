import React from 'react'
import styled from "styled-components"
import { Button } from '../Styled/Button';

const Container = styled.div`
    /* background-color: black; */
    /* color:white; */
    /* padding: 10px 18px; */
    max-width: 1180px;
    height: 80vh;
    display: flex;
    margin: 20px auto;
    align-items: center;
    padding-top: 80px;
    /* max-height: calc(100vh - 80px); */
    
    
    .content h1{
        width: 528px;
        height: 144px;
        /* font-family: Poppins; */
        font-size: 75px;
        font-weight: 700;
        line-height: 144px;
        white-space: nowrap;
        letter-spacing: 0em;
        text-align: left;
    }
    
    
    `;
   

function StartGame({toogleBtn}) {
  return (
    <Container>
      <div>
      <img src="/images/dices1.png" alt="Fail" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toogleBtn}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame
