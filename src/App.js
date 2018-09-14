import React, { Component } from 'react';
import Display from './Display';
import Key from './Key';
import './App.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: "",
        };
    }

    calculateResult = () => {
        let result = this.state.numbers;

        if (result) {
            try {
                result = eval(result);
            } catch (e) {
                result = "Invalid Expression";
            }
            this.setState({
                numbers: result
            });
        }
    };

    handleClick(digit) {
        let temp = this.state.numbers;
        switch (digit) {
            case "CE":
                if (temp.length > 0) {
                    temp = temp.slice(0, -1);
                }
                this.setState({numbers: temp});
                break;
            case "C":
                this.setState({numbers: ""});
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
                    numbers: temp,
                });
                break;
        }
    }

    renderKey(digit, label, type="single") {
        return (
            <Key onClick={() => this.handleClick(digit)} value={digit} label={label} type={type}/> )
    }

    render() {
        return (
            <div className="board">
                <Display data={this.state.numbers} />
                <div className="board-row">
                    {this.renderKey("C", "C", "clear")}
                    {this.renderKey("CE", "CE", "double clear")}
                    {this.renderKey("/", "/", "operation")}
                </div>
                <div className="board-row">
                    {this.renderKey(7, "7")}
                    {this.renderKey(8, "8")}
                    {this.renderKey(9, "9")}
                    {this.renderKey("*", "x","operation")}
                </div>
                <div className="board-row">
                    {this.renderKey(4, "4")}
                    {this.renderKey(5, "5")}
                    {this.renderKey(6, "6")}
                    {this.renderKey("-", "-", "operation")}
                </div>
                <div className="board-row">
                    {this.renderKey(3, "3")}
                    {this.renderKey(2, "2")}
                    {this.renderKey(1, "1")}
                    {this.renderKey("+", "+", "operation")}
                </div>
                <div className="board-row">
                    {this.renderKey(0, "0")}
                    {this.renderKey(".", ".")}
                    {this.renderKey("equal", "=", "double operation")}
                </div>
            </div>
        );
    }
}

export default Board;
