import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInputchange = this.onInputchange.bind(this);
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    render() {
        return (
            <div>
                <input
                    name="item-name"
                    type="text"
                    defaultValue={this.props.itemName}
                    placeholder="Item Name"
                    onChange={this.onInputchange}
                />
                <input
                    name="item-score"
                    type="number"
                    defaultValue={this.props.itemScore}
                    placeholder="Score"
                    onChange={this.onInputchange}
                />
                <input
                    name="item-score-max"
                    type="number"
                    defaultValue={this.props.itemScoreMax}
                    placeholder="Max"
                    onChange={this.onInputchange}
                />
                <input
                    name="item-weight"
                    type="number"
                    defaultValue={this.props.itemWeight}
                    placeholder="Weight"
                    onChange={this.onInputchange}
                />
            </div>
        );
    }
}