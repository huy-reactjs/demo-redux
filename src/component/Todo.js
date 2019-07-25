import React from "react";
import {connect} from "react-redux";
import addItem from "../reduces/addItem";
import {ADD_ITEM, REMO_ITEM} from "../action/action";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    handleAdd = () => {
        let {dispatch} = this.props;
        dispatch({type: ADD_ITEM});
    };

    handleRemo = () => {
        let {dispatch} = this.props;
        dispatch({type: REMO_ITEM});
    };

    render() {
        return (
            <div>
                <span>{this.props.addItem}</span>
                <div>
                    <button onClick={this.handleAdd}>Add</button>
                    <button onClick={this.handleRemo}>Remove</button>
                </div>
            </div>
        )
    }
}

export default connect(
    addItem
)(Todo);
