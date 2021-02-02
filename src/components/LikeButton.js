import '../LikeButton.css';
import React, { useState } from "react";
 
function LikeButton() {
 // State: likes value

  const [likesCounted, setCount] = useState(0);
//function stateful
//useState returns an array with 2 elements, and we’re using
// ES6 destructuring to assign names to them. The first element is 
//the current value of the state, and the second element is a state setter function – just call it with a new value, and the state will be set and the component will re-render.
//First, we’re creating a new piece of state by calling useState,
// initializing it to 0. It returns an array containing that initial value, 
//along with a function for updating it. We’re destructuring that into 
//variables called steps and setSteps. We also wrote an increment 
//function to increase the step counter.

//React will call that updater function with the previous value of the state, and whatever you return will replace the state with a new value. The argument is called prevState in the example but you can name it anything.
// incrementMe and decrementMe function



//JavaScript syntax = array destructuring
//useState method =accepts a parameter to set the
// initial state and returns an array containing the current state
// and a function to set the state.
  // Action: code that causes an update to the state when something happens

  const incrementMe = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementMe = () => {
    setCount(prevCount => prevCount - 1);
  };
 // View: declarative description of the UI based on the current state

  return (
    <div>
        <div>
      <button onClick={incrementMe}>❤️</button>
      <button onClick={decrementMe}>👎</button>
          <h5> {likesCounted} likes</h5>
        </div>
    </div>
  );
}


export default LikeButton;

//When the user clicks “❤️” the button’s onClick handler is called = which calls the incrementMe function.
//incrementMe function updates the state with the new count.
