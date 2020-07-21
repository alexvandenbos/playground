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
   .selection-menu h2 {
     
   }
   .MonstersOnField {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap   
     
  }
  .MonsterCard {
    margin: 5px;
  }
  `


