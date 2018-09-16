import React from "react";
import Display from "./Display";

class Form extends React.Component {
    render() {
        const event = this.props.event;
        const data = this.props.data;
        const weight = this.props.weight;
        const height = this.props.height;
        const heightEvent = this.props.heightEvent;
        const weightEvent = this.props.weightEvent;

        return (
            <form onSubmit={event} >
            <Display data={data} />
        <div className="form-group">
            <legend>Weight</legend>
            <div className="row">
                <div className="col-xs-12">
                    <input className="form-control" id="weight" type="number"  value={weight} onChange={ weightEvent} />
                    <label className="label" htmlFor="weight">kg</label>
                </div>
            </div>
        </div>

        <div className="form-group">
            <legend>Height</legend>
        <div className="row">
            <div className="col-xs-6">
                <input className="form-control" id="height" type="number"  value={height} onChange={heightEvent} />
                <label className="label" htmlFor="height">cm</label>
            </div>
        </div>
        </div>
        <div>
            <button className="mass">Calculate</button>
        </div>
        </form>
        )
    }
}

export default Form;