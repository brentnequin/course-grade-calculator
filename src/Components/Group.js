import React from "react";
import GroupItem from "./GroupItem";

export default class Group extends React.Component {
    render() {
        const items = this.props.list.map((item, i) =>
            <GroupItem
                key={item.id} // random number between 0 and 9999
                index={i}
                groupIndex={this.props.index}
                itemName={item.itemName}
                itemScore={item.itemScore}
                itemScoreMax={item.itemScoreMax}
                onChangeInputGroupItem={this.props.onChangeInputGroupItem.bind(this)}
                onClickDeleteButtonGroupItem={this.props.onClickDeleteButtonGroupItem.bind(this)}
            />
        );
        return (
            <div>
                <input
                    name="groupName"
                    type="text"
                    defaultValue={this.props.groupName}
                    placeholder="Group Name"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                />
                <input
                    name="groupWeight"
                    type="number"
                    defaultValue={this.props.groupWeight}
                    placeholder="Group Weight"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                />
                <button onClick={() => {this.props.onClickDeleteButton(this.props.index)} }>×</button>
                <button onClick={() => {this.props.onClickAddGroupItemButton(this.props.index)}} >Add Item</button>
                {items}
            </div>
        )
    }
}