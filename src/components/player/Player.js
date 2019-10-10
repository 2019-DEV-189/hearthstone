import React, { Component } from 'react';

class Player extends Component {

  createPlayer() {
    return (
      <div className = "Player">
        <div> "Player's Mana Slot"</div>
        <div> "Player's HealthScore"</div>
      </div>
    );
  }

  render() {
    return this.createPlayer();
  }
}

export default Player;