import styled from "styled-components";
export const Button = styled.button`
min-width: 220px;
min-height: 44px;
border-radius: 5px;
color: white;
background-color: black;
padding: 10px 18px 10px 18px;
gap: 10px;
font-size: 16px;
border: 1px solid transparent;
transition:background-color 0.4s ease-in;
 

&:hover{
  background-color: white;
  border: 1px solid black;  
  color : black;
  transition:background-color 0.3s ease-in;
  cursor: pointer;
  font-weight: 500;
 }


`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
  background-color: black;
  border: 1px solid transparent;  
  color : white;
  /* transition:background-color 0.3s ease-in; */
  /* cursor: pointer; */
  font-weight: 500;
 }
`;