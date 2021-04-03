import React from "react";
import Item from "./Item";
import Score from "./Score";

export default class GradeCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [
                {
                    itemName: "Homework 1",
                    itemScore: "90",
                    itemScoreMax: "100",
                    itemWeight: "40"
                },
                {
                    itemName: "Quiz 1",
                    itemScore: "95",
                    itemScoreMax: "100",
                    itemWeight: "60"
                }
            ],
            score: 0
        };
        this.onClickAddButton = this.onClickAddButton.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    calculateScore() {
        return this.state.itemList.reduce((score, item, index) =>
            score + (item.itemScore / item.itemScoreMax) * (item.itemWeight / 100), 0
        );
    }

    componentDidMount() {
        this.setState({score: this.calculateScore()});
    }


    onClickAddButton(e) {
        let itemList = this.state.itemList;
        this.setState({
            itemList: [...itemList, {
                itemName: "",
                itemScore: "",
                itemScoreMax: "",
                itemWeight: ""
            }]
        });
        console.log(itemList);
    }

    onChangeInput(index, itemProp, newValue) {
        let itemList = [...this.state.itemList];
        let item = {...itemList[index]};
        item[itemProp] = newValue;
        itemList[index] = item;
        this.setState({itemList});
        this.setState({score: this.calculateScore()});
    }

    render() {
        const items = this.state.itemList.map((item, i) =>
            <Item
                key={i}
                index={i}
                itemName={item.itemName}
                itemScore={item.itemScore}
                itemScoreMax={item.itemScoreMax}
                itemWeight={item.itemWeight}
                onChangeInput={this.onChangeInput.bind(this)}
            />
        );
        return (
            <div>
                <Score score={this.state.score} />
                <div>{items}</div>
                <button onClick={this.onClickAddButton}>+</button>
            </div>
        );
    }
}