import React, { Component } from 'react';
import Form from "./Form";

class MassIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            result: "",
        };

        this.handleHeight = this.handleHeight.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleResult = this.handleResult.bind(this);
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
        } else if (index <= 24.9) {
            temp = 'Normal weight';
        } else if (index >= 30) {
            temp = 'Overweight';
        } else {
            temp = "Invalid data";
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

    handleResult = ()  => {
        const index = this.calculateIndex();
        let result = this.getResults(index);
        this.setState({
            result: result
        });
    }

    render() {
        return (
            <div className="board">
                <h3>Body Mass Index Calculator</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <Form data={this.state.result} event={this.handleResult}
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