import React, { Component } from 'react';
import logo from './logo.svg';
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
            value: null,
            operator: null,
        };
    }

    inputNumber(number) {

    }

    render() {
        return (
            <div className="Game">
                <Board data={this.state.operations} />
                <Keys>
                    <Key onClick={this.handleClick} label="C" value="clear" />
                    <Key onClick={this.handleClick} label="7" value="7" />
                    <Key onClick={this.handleClick} label="4" value="4" />
                    <Key onClick={this.handleClick} label="1" value="1" />
                    <Key onClick={this.handleClick} label="0" value="0" />

                    <Key onClick={this.handleClick} label="/" value="/" />
                    <Key onClick={this.handleClick} label="8" value="8" />
                    <Key onClick={this.handleClick} label="5" value="5" />
                    <Key onClick={this.handleClick} label="2" value="2" />
                    <Key onClick={this.handleClick} label="." value="." />

                    <Key onClick={this.handleClick} label="x" value="*" />
                    <Key onClick={this.handleClick} label="9" value="9" />
                    <Key onClick={this.handleClick} label="6" value="6" />
                    <Key onClick={this.handleClick} label="3" value="3" />
                    <Key label="" value="null" />

                    <Key onClick={this.handleClick} label="-" value="-" />
                    <Key onClick={this.handleClick} label="+" size="2" value="+" />
                    <Key onClick={this.handleClick} label="=" size="2" value="equal" />
                </Keys>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super()
        this.state = { operations: [] }
    }
}

export default Game;
