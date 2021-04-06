import React from "react";

export default class GroupItem extends React.Component {
    render() {
        return (
            <div>
                <input
                    name="itemName"
                    type="text"
                    defaultValue={this.props.itemName}
                    placeholder="Item Name"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                <input
                    name="itemScore"
                    type="number"
                    defaultValue={this.props.itemScore}
                    placeholder="Score"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                <input
                    name="itemScoreMax"
                    type="number"
                    defaultValue={this.props.itemScoreMax}
                    placeholder="Max"
                    onChange={e => {this.props.onChangeInputGroupItem(this.props.groupIndex, this.props.index, e.target.name, e.target.value)} }
                />
                <button onClick={() => {this.props.onClickDeleteButtonGroupItem(this.props.groupIndex, this.props.index)} }>×</button>
            </div>
        );
    }
}