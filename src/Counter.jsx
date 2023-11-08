import React from "react";
import attack from "./images/attack.png";
import defence from "./images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.handleGameStatus = this.handleGameStatus.bind(this);
    this.displayButton = this.displayButton.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }

  handleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      this.handleGameStatus(newCount);
      return {
        count: newCount,
        lastPlay: "Attack",
      };
    });
  };

  handleDefence = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      this.handleGameStatus(newCount);
      return {
        count: newCount,
        lastPlay: "Defence",
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
      this.handleGameStatus(this.state.count);
      this.setState(() => {
        return {
          lastPlay: "Attack",
        };
      });
    } else {
      this.handleDefence();
      this.handleGameStatus(this.state.count);
      this.setState(() => {
        return {
          lastPlay: "Defence",
        };
      });
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        lastPlay: "",
        gameStatus: "",
      };
    });
  };

  handleGameStatus = (cnt) => {
    if (cnt >= 10) {
      this.setState(() => {
        return {
          gameStatus: "You Win!",
        };
      });
    }
    if (cnt <= -10) {
      this.setState(() => {
        return {
          gameStatus: "You lose!",
        };
      });
      return false;
    }
  };

  displayButton = () => {
    if (this.state.count >= 10 || this.state.count <= -10) {
      return { display: "none" }; 
    } else {
      return {};
    }
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status : {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            alt="attack"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3">
          <img
            alt="defence"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defence}
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            style={this.displayButton()}
            onClick={this.handleRandomPlay}
            className="btn btn-secondary w-100 mt-3"
          >
            Random Play
          </button>
          <br />
          <button
            onClick={this.handleReset}
            className="btn btn-warning w-100 mt-3"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
