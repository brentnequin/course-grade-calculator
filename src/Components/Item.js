import React from "react";
import Paper from '@material-ui/core/Paper';
import { InputBase, Button } from '@material-ui/core';

export default class Item extends React.Component {
    render() {
        return (
            <Paper elevation={3}>
                <div className="item-wrapper">
                    <InputBase
                        className="input-itemName"
                        name="itemName"
                        type="text"
                        defaultValue={this.props.itemName}
                        placeholder="Item Name"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    <InputBase
                        className="input-itemScore"
                        name="itemScore"
                        type="number"
                        defaultValue={this.props.itemScore}
                        placeholder="Score"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    /
                    <InputBase
                        name="itemScoreMax"
                        type="number"
                        defaultValue={this.props.itemScoreMax}
                        placeholder="Max"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    <InputBase 
                        name="itemWeight"
                        type="number"
                        defaultValue={this.props.itemWeight}
                        placeholder="Weight"
                        onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value)} }
                    />
                    <Button className="button-item-delete" onClick={() => {this.props.onClickDeleteButton(this.props.index)} }>×</Button>
                </div>
            </Paper>
        );
    }
}