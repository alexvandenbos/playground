import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: 
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
      Helvetica, Arial, sans-serif, "Apple Color Emoji", 
      "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
   }
   
   nav {
     color: white;
     position: fixed;
     background: green;
     width: 100%;
     top: 0px;
   }
   .selection-menu {
     margin-top: 100px;
     display: flex;
     flex-direction: column;
   }
   .AbilitycardsOnField{
     display: flex;
     justify-content: center;
     
   }
   .MonstersOnField {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap   
     
  }
  .MonsterCard {
    margin: 5px;
    text-align: center;
  }
  .rotate90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .rotate180 {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .rotate270 {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  `


