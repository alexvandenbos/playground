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
   form {
     height: 90px;
   }
   .button {
    background-color: #555555;
    border: none;
    color: ${({ theme }) => theme.primaryLight};
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.2em;
   }
   .inputField {
    height: 35%;
    margin: 0.2em;
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
    text-align: center;
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     
   }
   .AbilitycardsOnField div {
     padding: 0.2em 0.2em;
     
   }
   .MonstersOnField {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;   
     
  }
  .MonsterCard {
    padding: 0.2em 0.2em;
    text-align: center;
  }
  .MonsterCard input {
    margin-bottom: 0.2em;
  }
  .shuffle {
    opacity: .4; /* Firefox, Chrome[, Webkit?] */
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
    filter: alpha(opacity=70);
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


