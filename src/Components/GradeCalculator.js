import React from "react";
import Item from "./Item";
import Score from "./Score";

export default class GradeCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            score: 0
        };
        this.onClickAddButton = this.onClickAddButton.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onClickAddButton(event) {
        const itemList = this.state.itemList;
        this.setState({
            itemList: itemList.concat(<Item onChange={this.onChangeInput(this)} />)
        });
    }

    onChangeInput(data) {
        const score = 0;
        data.forEach((item, value) => {
            data.
        })
        this.state.score = score;
    }

    render() {
        return (
            <div>
                <Score score={this.state.score} />
                <Item
                    itemName={"Homework 1"}
                    itemScore={90}
                    itemScoreMax={100}
                    itemWeight={20}
                    onChange={this.onChangeInput}
                />
                <Item
                    itemName={"Quiz 1"}
                    itemScore={95}
                    itemScoreMax={100}
                    itemWeight={20}
                    onChange={this.onChangeInput}
                />
                <div>{this.state.inputList}</div>
                <button onClick={this.onClickAddButton}>+</button>
            </div>
        );
    }
}