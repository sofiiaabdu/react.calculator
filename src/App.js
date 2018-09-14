import React, { Component } from 'react';
import update from 'immutability-helper';
import Display from './Display';
import './App.css';

function Key(props) {
    return (
        <button className="key"
                onClick={props.onClick}
                data={props.value}>
            {props.label}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: "",
        };
    }

    calculateResult = () => {
        let result = this.state.keys;

        if (result) {
            result = eval(result);
            this.setState({
                keys: result
            });
        }
    };

    handleClick(digit) {
        let temp = this.state.keys;
        switch (digit) {
            case "CE":
                if (temp.length > 0) {
                    temp = temp.slice(0, -1);
                }
                this.setState({keys: temp});
                break;
            case "C":
                this.setState({keys: ""});
                break;
            case "equal":
                this.calculateResult();
                break;
            default:
                /*temp = update(this.state.keys, {
                    $push: [digit],
                });*/
                temp = temp + digit.toString();
                this.setState({
                    keys: temp,
                });
                break;
        }
    }

    renderKey(digit, label) {
        return (
            <Key onClick={() => this.handleClick(digit)} value={digit} label={label}/> )
    }

    render() {
        return (
            <div className="board">
                <Display data={this.state.keys} />
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
                    {this.renderKey(null)}
                    {this.renderKey(0, "0")}
                    {this.renderKey(null)}
                    {this.renderKey("CE", "CE")}
                    {this.renderKey("equal", "=")}
                </div>
            </div>
        );
    }
}

export default Board;
