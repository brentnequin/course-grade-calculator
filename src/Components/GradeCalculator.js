import React from "react";
import Item from "./Item";
import Score from "./Score";

export default class GradeCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputList: [],
            score: 0
        };
        this.onClickAddButton = this.onClickAddButton.bind(this);
    }

    onClickAddButton(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<Item />)
        });
    }

    render() {
        return (
            <div>
                <Score score={this.state.score} />
                <Item itemName={"Homework 1"} itemScore={90} itemScoreMax={100} itemWeight={20} />
                <Item itemName={"Quiz 1"} itemScore={95} itemScoreMax={100} itemWeight={20} />
                <div>{this.state.inputList}</div>
                <button onClick={this.onClickAddButton}>+</button>
            </div>
        );
    }
}