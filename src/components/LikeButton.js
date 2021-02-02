import '../LikeButton.css';
import React, { useState } from "react";
 
function LikeButton() {
  const [likesCounted, setCount] = useState(0);
  //This JavaScript syntax = array destructuring.
//useState method =accepts a parameter to set the
// initial state and returns an array containing the current state
// and a function to set the state.

  const incrementMe = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementMe = () => {
    setCount(prevCount => prevCount - 1);
  };
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