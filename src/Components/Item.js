import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: this.props.itemName,
            itemScore: this.props.itemScore,
            itemScoreMax: this.props.itemScoreMax,
            itemWeight: this.props.itemWeight,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidUpdate() {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
    }
    
    render() {
        return (
            <div>
                <input
                    name="itemName"
                    type="text"
                    defaultValue={this.props.itemName}
                    placeholder="Item Name"
                    onChange={this.onInputChange}
                />
                <input
                    name="itemScore"
                    type="number"
                    defaultValue={this.props.itemScore}
                    placeholder="Score"
                    onChange={this.onInputChange}
                />
                <input
                    name="itemScoreMax"
                    type="number"
                    defaultValue={this.props.itemScoreMax}
                    placeholder="Max"
                    onChange={this.onInputChange}
                />
                <input
                    name="itemWeight"
                    type="number"
                    defaultValue={this.props.itemWeight}
                    placeholder="Weight"
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}