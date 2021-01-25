import '../LikeButton.css';
import React, { useState } from "react";
 
function LikeButton() {
  const [likesCounted, setCount] = useState(0);

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