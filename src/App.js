import React, { Component } from 'react';
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

class Display extends React.Component {
    render() {
        const result = Array.prototype.join.call(this.props.data, "");
        return <div className="Display"> {result} </div>
    }
}


class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            keys: [],
        };
    }

    calculateResult = () => {
        let result = this.state.keys.join('');

        if (result) {
            result = eval(result);
            this.setState({
                keys: result
            });
        }
    }

    handleClick(digit) {
        let temp = this.state.keys;
        switch (digit) {
            case "CE":
                temp.pop();
                this.setState({keys: temp});
                break
            case "C":
                temp = [];
                this.setState({keys: temp});
                break
            case "equal":
                this.calculateResult();
                break
            default:
                temp.push(digit);
                this.setState({keys: temp});
                break;
        }
    }


    renderKey(digit, label) {
        return (
            <Key onClick={() => this.handleClick(digit)} value={digit} label={label}/> )
    }

    render() {
        return (
            <div>
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
                    {this.renderKey(0, "0")}
                    {this.renderKey("equal", "=")}
                    {this.renderKey("CE", "CE")}
                </div>
            </div>
        );
    }
}

export default Board;
