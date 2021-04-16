import React from "react";
import GroupItem from "./GroupItem";
import { Paper, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

export default class Group extends React.Component {
    render() {
        const items = this.props.list.map((item) =>
            <GroupItem
                key={item.id}
                index={item.id}
                groupIndex={this.props.index}
                itemName={item.itemName}
                itemScore={item.itemScore}
                itemScoreMax={item.itemScoreMax}
                onChangeInputGroupItem={this.props.onChangeInputGroupItem.bind(this)}
                onClickDeleteButtonGroupItem={this.props.onClickDeleteButtonGroupItem.bind(this)}
            />
        );
        return (
            <Paper elevation={3}>
                <div className="groupName-wrapper">
                    <InputBase 
                        name="groupName"
                        type="text"
                        defaultValue={this.props.groupName}
                        placeholder="Group Name"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    <InputBase 
                        name="groupWeight"
                        type="number"
                        defaultValue={this.props.groupWeight}
                        placeholder="Weight"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    <Button className="button-item-delete" onClick={() => {this.props.onClickDeleteButton(this.props.index)} }>×</Button>
                    <Button className="button-groupItem-add" onClick={() => {this.props.onClickAddGroupItemButton(this.props.index)}} >Add Item</Button>
                </div>
                <div className="groupItems-wrapper">{items}</div>
            </Paper>
        )
    }
}