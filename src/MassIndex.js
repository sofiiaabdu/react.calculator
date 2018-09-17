import React, { Component } from 'react';
import Form from "./Form";

class MassIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
        };

        this.handleHeight = this.handleHeight.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.calculateIndex = this.calculateIndex.bind(this);
    }

    calculateIndex = () => {
        const tempHeight = Number(this.state.height);
        const tempWeight = Number(this.state.weight);
        const index = (tempWeight / (tempHeight/100 * tempHeight/100));

        return index;
    };

    getResults = (index) => {
        let temp = "";

        if (index <= 18.5) {
            temp = 'Underweight';
        } else if (index > 18.5 && index <= 25) {
            temp = 'Normal weight';
        } else if (index > 25 && index <= 30) {
            temp = 'Obese';
        } else if (index > 30) {
            temp = 'Overweight';
        } else {
            temp = "Please, enter: ";
        }
        return temp;
    }

    handleWeight(event) {
        this.setState({
            weight: event.target.value
        });
    }

    handleHeight(event) {
        this.setState({
            height: event.target.value
        });
    }

    render() {
        const index = this.calculateIndex();
        const result = this.getResults(index);

        return (
            <div className="board">
                <h3>Body Mass Index Calculator</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <Form data={result}
                              weigth={this.state.weight} height={this.state.height}
                              weightEvent={this.handleWeight} heightEvent={this.handleHeight}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MassIndex;