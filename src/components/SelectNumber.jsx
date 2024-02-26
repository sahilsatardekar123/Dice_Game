import React, { useState } from 'react';
import styled from "styled-components";

function SelectNumber({ error, selectNumber, setSelectNumber, setError}) {
  const arrNumber = [1, 2, 3, 4, 5, 6]; 
  const handleError= (value) => {
    setSelectNumber(value);
    setError("")
  }
  return (
    <Main >
      <p className='error'>{error}</p>
      <div className='flex'>
      {arrNumber.map((value, i) => (
        <Box 
        isSelected={value === selectNumber}
        key={i} onClick={() => handleError(value)}>
          {value}
        </Box>
        
      ))}
     
      </div>
      <p>Select Number</p>
    </Main>
  );
}

export default SelectNumber;


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.error{
  color: red;
}
.flex{
   display: flex; 
  margin-top:25px;
  gap: 24px;
  margin-right: 12px;
}
p{
  font-size: 24px;
  font-weight: 500;
  margin-right:12px
}
  
`
