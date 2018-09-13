import React, { Component } from 'react';
import './App.css';

function Key(props) {
    return (
        <button className="key"
                onClick={props.onClick}
                data-value={props.value}>
            {props.label}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: [],
        };
    }

    renderKey(digit, label) {
        return (
            <Key onClick={() => this.handleClick(digit)} value={digit} label={label}/> )
    }

    handleClick(digit) {
        let temp = this.state.keys;
        let result = 0;

        if (digit === "equal" && temp.length > 0 ) {
            result = eval(temp.join(''));
            this.setState({keys: result})
        }
        else if (digit === "C") {
            temp.pop();
            this.setState({keys: temp});
            }
         else   {
            temp.push(digit);
            this.setState({keys: temp});
        }
    }

    render() {
        const status = this.state.keys;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderKey(7, "7")}
                    {this.renderKey(4, "4")}
                    {this.renderKey(1, "1")}
                    {this.renderKey(".", ".")}
                    {this.renderKey("C", "C")}
                </div>
                <div className="board-row">
                    {this.renderKey(8, "8")}
                    {this.renderKey(5, "5")}
                    {this.renderKey(2, "2")}
                    {this.renderKey("*", "x")}
                    {this.renderKey("/", "/")}
                </div>
                <div className="board-row">
                    {this.renderKey(9, "9")}
                    {this.renderKey(6, "6")}
                    {this.renderKey(3, "3")}
                    {this.renderKey("+", "+")}
                    {this.renderKey("-", "-")}
                </div>
                <div className="board-row">
                    {this.renderKey(0, "0")}
                    {this.renderKey("equal", "=")}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
