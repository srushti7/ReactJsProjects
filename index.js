import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date(2020, 10, 9);
currDate = currDate.getHours();
let greeting = '';



const greetingStyle = {};


if (currDate >= 1 && currDate < 12) {
      greeting = 'Good Morning!';
      greetingStyle.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
      greeting = 'Good Afternoon!';
      greetingStyle.color = "Orange";  
  }
  else
      greeting = 'Good Evening';
      greetingStyle.color = "Blue";



ReactDOM.render(

  <>

  <div>  
  
  <h1>Hello Sir, <span style={greetingStyle}> {greeting} </span> </h1>
  
  </div>
 
  </>
 ,
  
   document.getElementById('root'));