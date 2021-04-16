import React from "react";
import { InputBase, Paper, Button } from '@material-ui/core';

export default class GroupItem extends React.Component {
    render() {
        return (
            <Paper elevation={3}>
                <div className="groupItem-wrapper">
                <InputBase
                    name="itemName"
                    type="text"
                    defaultValue={this.props.itemName}
                    placeholder="Item Name"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                <InputBase
                    className="input-itemScore"
                    name="itemScore"
                    type="number"
                    defaultValue={this.props.itemScore}
                    placeholder="Score"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                /
                <InputBase
                    name="itemScoreMax"
                    type="number"
                    defaultValue={this.props.itemScoreMax}
                    placeholder="Max"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                <Button className="button-item-delete" onClick={() => {this.props.onClickDeleteButtonGroupItem(this.props.groupIndex, this.props.index)} }>×</Button>
                </div>
            </Paper>
        );
    }
}