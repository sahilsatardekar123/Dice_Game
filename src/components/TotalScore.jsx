import React from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
/* text-align: center; */
flex-direction: column;
margin-left: 20px;
width: 135px;
height: 111px;
gap: 3px;
.content h1{
  font-size: 60px;
  font-weight: 500;
  /* line-height: 120px; */
}
.content p{
  font-size: 20px;
  font-weight: 500;
}
`;

function TotalScore({score}) {
  return (
    <Container>
      <div className='content'>
      <h1>{score}</h1>
      <p>Total Score</p>
      </div>
    </Container>
  )
}

export default TotalScore
