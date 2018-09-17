import React from "react";

class Display extends React.Component {
    render() {
        const result = this.props.data;
        return <div className="Display"> {result}  </div>
    }
}

export default Display;