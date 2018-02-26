import React, { Component } from 'react';
import './App.css';

import Cell from './Components/Cell';

class App extends Component {
  constructor(props) {
    super(props)

    this.changePlayer = this.changePlayer.bind(this)
    this.checkedBy = this.checkedBy.bind(this)
    this.checkHorizontal = this.checkHorizontal.bind(this)
    this.checkVertical = this.checkVertical.bind(this)
    this.reset = this.reset.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.checkIfDraw = this.checkIfDraw.bind(this)
  }
  componentWillMount() {
    this.setState({
      end: false,
      win: false,
      draw: false,
      player: 1,
      cells: [
        {id: 0, player: 0, checked: false}, 
        {id: 1, player: 0, checked: false}, 
        {id: 2, player: 0, checked: false},
        {id: 3, player: 0, checked: false}, 
        {id: 4, player: 0, checked: false}, 
        {id: 5, player: 0, checked: false},
        {id: 6, player: 0, checked: false}, 
        {id: 7, player: 0, checked: false}, 
        {id: 8, player: 0, checked: false},
      ]
    })
  }

  changePlayer() {
    if (this.state.player === 1) {
      this.setState({
        player: 2
      })
    }
    else {
      this.setState({
        player: 1
      })
    }
  }

  checkedBy(id) {
    let arr = this.state.cells;
    arr[id].player = this.state.player;
    arr[id].checked = true;
    this.setState({
      cells: [...arr]
    })

    if(this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()) {
      this.setState({
        end: true,
        win: true
      })
    }
    else if(this.checkIfDraw()) {
      this.setState({
        end: true,
        draw: true
      })
    }
    else {
      this.changePlayer();
    }
  }

  checkHorizontal() {
    if(this.state.cells[0].player !== 0) {
      if(this.state.cells[0].player === this.state.cells[1].player && this.state.cells[0].player === this.state.cells[2].player) {
        return true
      }
    }
    if(this.state.cells[3].player !== 0) {
      if(this.state.cells[3].player === this.state.cells[4].player && this.state.cells[3].player === this.state.cells[5].player) {
        return true
      }
    }
    if(this.state.cells[6].player !== 0) {
      if(this.state.cells[6].player === this.state.cells[7].player && this.state.cells[6].player === this.state.cells[8].player) {
        return true
      }
    }
    else return false
  }
  checkVertical() {
    if(this.state.cells[0].player !== 0) {
      if(this.state.cells[0].player === this.state.cells[3].player && this.state.cells[0].player === this.state.cells[6].player) {
        return true
      }
    }
    if(this.state.cells[1].player !== 0) {
      if(this.state.cells[1].player === this.state.cells[4].player && this.state.cells[1].player === this.state.cells[7].player) {
        return true
      }
    }
    if(this.state.cells[2].player !== 0) {
      if(this.state.cells[2].player === this.state.cells[5].player && this.state.cells[2].player === this.state.cells[8].player) {
        return true
      }
    }
    else return false
  }
  checkDiagonal() {
    if(this.state.cells[0].player !== 0) {
      if(this.state.cells[0].player === this.state.cells[4].player && this.state.cells[0].player === this.state.cells[8].player) {
        return true
      }
    }
    if(this.state.cells[2].player !== 0) {
      if(this.state.cells[2].player === this.state.cells[4].player && this.state.cells[2].player === this.state.cells[6].player) {
        return true
      }
    }
    else return false
  }

  checkIfDraw() {
    let count = 0
    this.state.cells.forEach(element => {
      if(element.checked) count++
    })
    if(count === 9) return true
  }

  reset() {
    let arr = this.state.cells
    arr.forEach(element => {
      element.player = 0;
      element.checked = false;
    });
    this.setState({
      end: false,
      win: false,
      draw: false,
      cells: [...arr]
    })
  }

  showDialog() {
    return(
      <div className="dialog">
        {(this.state.win) ? <h2>player {this.state.player} won</h2> : <h2>no winner</h2>}
        <button onClick={this.reset}>Again</button>
      </div>
    )
  }
  render() {
    return (
      <div className="grid">
      {this.state.cells.map((elem) => <Cell clickMethod={this.checkedBy.bind(this)} player={elem.player} checked={elem.checked} id={elem.id.toString()} key={elem.id.toString()}/>)}
      {(this.state.end) ? this.showDialog() : ""}
      </div>
    )
    
  }
}

export default App;
