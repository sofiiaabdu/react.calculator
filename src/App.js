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



export default Game;
