import React from "react";

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>Score:{this.props.score}</div>
        );
    }
}