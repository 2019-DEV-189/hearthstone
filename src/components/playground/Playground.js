import React, { Component } from 'react';
import Playerarena from '../playerarena/Playerarena';

class Playground extends Component {

  PLAYER1_TURN = 'Player1\'s Turn!';
  PLAYER2_TURN = 'Player2\'s Turn!';
  PLAYER1_WINS = 'Player1 Wins!';
  PLAYER2_WINS = 'Player2 Wins!';

  manaSlots = 0;
  healthScore = 30;
  cardsDeck = [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8];
  playerHand = ['','',''];

  statusMessages = {
    "turn": { "player1": this.PLAYER1_TURN, "player2": this.PLAYER2_TURN},
    "won":  { "player1": this.PLAYER1_WINS, "player2": this.PLAYER2_WINS}
  };

  state = {
    isGameOver : false,
    gameStatusMessage : this.PLAYER1_TURN,
    currentPlayer : 'Player1',
    playerArenaStatus : {
      "player1": { "manaSlots": this.manaSlots, "healthScore": this.healthScore, "playerHand": this.playerHand, "cardsDeck": this.cardsDeck},
      "player2": { "manaSlots": this.manaSlots, "healthScore": this.healthScore, "playerHand": this.playerHand, "cardsDeck": this.cardsDeck}
    }
  }

  createPlayground() {
    return (
      <div className="playground">
        <h1>Hearthstone</h1>
          <div className="gameStatusMessage">{this.state.gameStatusMessage}</div>
          <Playerarena className="player1arena"/>
          <Playerarena className="player2arena"/>
      </div>
    );
  }

  render() {
    return this.createPlayground();
  }
}

export default Playground;