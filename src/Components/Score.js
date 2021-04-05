import React from "react";

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>Score: {100*Math.round(this.props.score * 10000) / 10000}%</div>
        );
    }
}