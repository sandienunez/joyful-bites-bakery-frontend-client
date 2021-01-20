import React, { Component } from 'react';
import '../LikeButton.css';

 
class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
          liked: false
        };
        this.handleClick = this.handleClick.bind(this);
      } 
      
      handleClick() {
        this.setState({
          liked: !this.state.liked
        });
      }
      
      render() {
        const label = this.state.liked ? '♡' : '❤️'
        return (
          <div className="customContainer">
            <button className="btn btn-primary" onClick={this.handleClick}>
              {label}</button>

          </div>
        );
      }
    

    // state = {
    //     like: 0,
    //     dislike: 0
    // }

    // incrementMe = () => {
    //     let newCount = this.state.like + 1
    //     this.setState({
    //       like: newCount
    //     })
    //   }

    //   decrementMe = () => {
    //     let newCount = this.state.dislike + 1
    //     this.setState({
    //       dislike: newCount
    //     })
    //   }

    // render() { 
    //     return (
    //         <div>
    //             <button onClick={this.incrementMe}> ❤️ Like: {this.state.like} </button>
    //             <button onClick={this.decrementMe}> 👎 Dislike: {this.state.dislike} </button>

    //         </div>
    //     );
    // }
}
 
export default LikeButton;