import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDices({rollDice, currentDice}) {
    
    
  return (
    <RoleDice >
        <div className='Dice' 
        onClick={ rollDice}>
         <img src={`images/dices/dice_${currentDice}.png`} alt="fail" />
         <p>Click on Dice to roll</p>
       </div>
       
    </RoleDice>
  )
}

export default RoleDices
const RoleDice = styled.div`
margin-top: 40px;
display: flex;
justify-content: center;
/* flex-direction: column; */
align-items: center;
p{
    font-size: 24px;
}

.Dice{
    cursor: pointer;
}
`;

