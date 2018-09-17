import React from "react";
import './Key.css';

function Key(props) {
    const className = `key ${props.type}`;
    return (
        <button className={className}
                onClick={props.onClick}
                data={props.value}>
            {props.label}
        </button>
    );
}

export default Key;