import React, { Component } from 'react';
import Deck from '../deck/Deck';
import Player from '../player/Player';

class Playground extends Component {
  render() {
    return (
      <div className="Playground">
        <h1>Hearthstone</h1>
          <Deck />
          <Player />
      </div>
    );
  }
}

export default Playground;