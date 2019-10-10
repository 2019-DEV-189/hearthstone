import React, { Component } from 'react';

class Hand extends Component {

  createHand() {
    return (
      <div className="Hand">
        <div className= "Card1"> "Player's Hand Card1" </div>
        <div className= "Card2"> "Player's Hand Card2" </div>
        <div className= "Card3"> "Player's Hand Card3" </div>
      </div>
    );
  }

  render() {
    return this.createHand();
  }
}

export default Hand;