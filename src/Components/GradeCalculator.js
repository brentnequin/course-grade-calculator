import React from "react";
import Group from "./Group";
import Item from "./Item";
import Score from "./Score";

function isGroup(item) {
    return "groupList" in item;
}

const itemStyle = {
    marginBottom: '10px',
}

const groupStyle = {
    marginBottom: '10px',
}

export default class GradeCalculator extends React.Component {
    constructor(props) {
        super(props);
        
        let itemList = [
            {
                id: 0,
                groupList: [
                    {
                        id: 0,
                        itemName: "Homework 1",
                        itemScore: "90",
                        itemScoreMax: "100",
                    },
                    {
                        id: 1,
                        itemName: "Homework 2",
                        itemScore: "92",
                        itemScoreMax: "100",
                    }
                ],
                groupName: "Homework",
                groupWeight: "40"
            },
            {
                id: 1,
                itemName: "Quiz 1",
                itemScore: "95",
                itemScoreMax: "100",
                itemWeight: "60"
            }
        ]
        if (JSON.parse(localStorage.getItem('itemList')))
            itemList = JSON.parse(localStorage.getItem('itemList'));

        this.state = {
            itemList: itemList,
            score: 0
        };
        this.onClickAddItemButton = this.onClickAddItemButton.bind(this);
        this.onClickAddGroupButton = this.onClickAddGroupButton.bind(this);
    }

    calculateScore(list) {
        return list.reduce((score, item) => {
                if (isGroup(item)) {
                    if (item.groupName === "" || item.groupWeight === "")
                        return score;
                    else
                        return this.calculateGroupScore(item);
                }
                else if (item.itemName === "" || item.itemScore === "" || item.itemScoreMax === "" || item.itemWeight === "")
                    return score; // if an item has any empty fields, do not include in computation
                else
                    return score + (item.itemScore / item.itemScoreMax) * (item.itemWeight / 100);
            }, 0
        );
    }
    
    calculateGroupScore(group) {
        return group.groupList.reduce((score, item) => {
            if (item.itemName === "" || item.itemScore === "" || item.itemScoreMax === "")
                return score; // if an item has any empty fields, do not include in computation
            else
                return score + (item.itemScore / item.itemScoreMax) * (group.groupWeight / group.groupList.length / 100);
        }, 0
    );}

    componentDidMount() {
        this.setState({score: this.calculateScore(this.state.itemList)});
    }

    componentDidUpdate() {
        localStorage.setItem('itemList', JSON.stringify(this.state.itemList));
        console.log(this.state.itemList);
    }

    onClickAddItemButton(e) {
        let itemList = this.state.itemList;
        let id;
        if (itemList.length === 0)
            id = 0;
        else
            id = itemList[itemList.length - 1].id + 1;
        this.setState({
            itemList: [...itemList, {
                id: id,
                itemName: "",
                itemScore: "",
                itemScoreMax: "",
                itemWeight: ""
            }]
        });
    }

    onClickAddGroupButton(e) {
        let itemList = this.state.itemList;
        let id;
        if (itemList.length === 0)
            id = 0;
        else
            id = itemList[itemList.length - 1].id + 1;
        this.setState({
            itemList: [...itemList, {
                id: id,
                groupList: [
                    {
                        id: 0,
                        itemName: "",
                        itemScore: "",
                        itemScoreMax: "",
                    },
                ],
                groupWeight: ""
            },]
        });
    }

    onClickAddGroupItemButton(groupIndex) {
        console.log(groupIndex);
        let list = this.state.itemList;
        let groupItem = list.filter(item => item.id === groupIndex)[0];
        console.log(groupItem);
        let id;
        if (groupItem.groupList.length === 0)
            id = 0;
        else   
            id = groupItem.groupList[groupItem.groupList.length - 1].id + 1;
            groupItem.groupList.splice(groupItem.groupList.length, 0, {
            id: id,
            itemName: "",
            itemScore: "",
            itemScoreMax: "",
        }); 
        this.setState({itemList: list});
    }

    onClickDeleteButton(index) {
        console.log(index);
        let itemList = this.state.itemList;
        itemList = itemList.filter(item => item.id !== index);
        this.setState({itemList: itemList});
        this.setState({score: this.calculateScore(itemList)})
    }

    onClickDeleteButtonGroupItem(groupIndex, itemIndex) {
        console.log(groupIndex, itemIndex);
        let list = this.state.itemList;
        console.log(list);
        console.log(groupIndex, itemIndex);
        console.log(list.filter(item => item.id === groupIndex));
        let groupList = list.filter(item => item.id === groupIndex)[0].groupList;
        console.log(groupList);
        groupList = groupList.filter(item => item.id !== itemIndex);
        if (groupList.length)
            list[groupIndex].groupList = groupList;
        else
            list = list.filter(item => item.id !== groupIndex);
        this.setState({itemList: list});
        this.setState({score: this.calculateScore(list)})
    }

    onChangeInput(index, itemProp, newValue) {
        console.log(index);
        let itemList = [...this.state.itemList];
        let item = itemList.filter(item => item.id === index)[0];
        console.log("item", item);
        item[itemProp] = newValue;
        itemList.filter(item => item.id === index)[0] = item;
        this.setState({itemList: itemList});
        this.setState({score: this.calculateScore(itemList)})
    }

    onChangeInputGroupItem(groupIndex, itemIndex, itemProp, newValue) {
        console.log(groupIndex, itemIndex);
        let list = [...this.state.itemList];
        let item = list.filter(item => item.id === groupIndex)[0];
        let groupItem = item.groupList.filter(item => item.id === itemIndex)[0];
        groupItem[itemProp] = newValue;
        list.filter(item => item.id === groupIndex)[0].groupList.filter(item => item.id === itemIndex)[0] = item;
        this.setState({itemList: list});
        this.setState({score: this.calculateScore(list)})
    }

    render() {
        const items = this.state.itemList.map((item) => {
            if (isGroup(item))
                return <Group
                    key={item.id}
                    index={item.id}
                    style={groupStyle}
                    list={item.groupList}
                    groupName={item.groupName}
                    groupWeight={item.groupWeight}
                    onChangeInput={this.onChangeInput.bind(this)}
                    onClickDeleteButton={this.onClickDeleteButton.bind(this)}
                    onChangeInputGroupItem={this.onChangeInputGroupItem.bind(this)}
                    onClickAddGroupItemButton={this.onClickAddGroupItemButton.bind(this)}
                    onClickDeleteButtonGroupItem={this.onClickDeleteButtonGroupItem.bind(this)}
                />
            return <Item
                key={item.id}
                index={item.id}
                style={itemStyle}
                itemName={item.itemName}
                itemScore={item.itemScore}
                itemScoreMax={item.itemScoreMax}
                itemWeight={item.itemWeight}
                onChangeInput={this.onChangeInput.bind(this)}
                onClickDeleteButton={this.onClickDeleteButton.bind(this)}
            />
        });
        return (
            <div>
                <Score score={this.state.score} />
                <div>{items}</div>
                <button onClick={this.onClickAddItemButton}>Add Item</button>
                <button onClick={this.onClickAddGroupButton}>Add Group</button>
            </div>
        );
    }
}