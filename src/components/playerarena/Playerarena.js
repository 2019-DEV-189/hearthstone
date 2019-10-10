import React, { Component } from 'react';
import Deck from '../deck/Deck';
import Player from '../player/Player';
import Hand from '../hand/Hand';

class Playerarena extends Component {

  createPlayerArena() {
    return (
      <div className="Playerarena">
        <Player />
        <Hand />
        <Deck />
      </div>
    );

  }
  render() {
    return this.createPlayerArena();
  }
}

export default Playerarena;