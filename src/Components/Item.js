import React from "react";

export default class Item extends React.Component {
    render() {
        return (
            <div>
                <input
                    name="itemName"
                    type="text"
                    defaultValue={this.props.itemName}
                    placeholder="Item Name"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value) } }
                />
                <input
                    name="itemScore"
                    type="number"
                    defaultValue={this.props.itemScore}
                    placeholder="Score"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value) } }
                />
                <input
                    name="itemScoreMax"
                    type="number"
                    defaultValue={this.props.itemScoreMax}
                    placeholder="Max"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value) } }
                />
                <input
                    name="itemWeight"
                    type="number"
                    defaultValue={this.props.itemWeight}
                    placeholder="Weight"
                    onChange={e => {this.props.onChangeInput(this.props.index, e.target.name, e.target.value) } }
                />
            </div>
        );
    }
}