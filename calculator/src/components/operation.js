import React, { Component } from 'react';
import {connect} from 'react-redux'
import { operationPressed } from '../actions'

class Operation extends Component {

    clickHandler(){
        this.props.operationChoosed(this.props.operation);
    }
    render() {
        return (
            <button onClick={this.clickHandler.bind(this)} className="button btnO"
                    value="{this.props.operation}">{this.props.operation}</button>

        )

    }
}

function mapStateToProps(state) {

    return {

    }

}

function mapDispathToProps(dispatch) {

    return {
        operationChoosed : function (operation) {
            dispatch(operationPressed(operation))
        }
    }

}

export default connect(mapStateToProps, mapDispathToProps)(Operation);
