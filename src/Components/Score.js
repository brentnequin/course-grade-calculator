import React from "react";
import { Paper } from '@material-ui/core';
import styled from "styled-components";

function calculateGradeColor(grade) { // grade between 0 and 100
    return `rgba(${255-Math.round((255*grade)/100)}, ${255-Math.round(255*(100-grade)/100)}, 0, 0.5)`;
}

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <ScoreBox score={this.props.score} className="score-box" elevation={3}>
                <h2>
                    {100*Math.round(this.props.score * 10000) / 10000}%
                </h2>
            </ScoreBox>
        );
    }
    componentDidUpdate() {
        console.log(Math.round(this.props.score*100));
    }
}

const ScoreBox = styled(Paper)`
    background-color: ${props => props.score <= 100 && props.score >= 0 ? calculateGradeColor(Math.round(100*props.score)) : 'white'};
`;

