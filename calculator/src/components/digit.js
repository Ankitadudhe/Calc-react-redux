import React, { Component } from 'react';
import { digitPressed } from '../actions'
import {connect} from 'react-redux'

class Digit extends Component {

    render() {
        return (
            <button onClick={()=> { this.props.digitClicked(this.props.number) }} className="button btnG" value="{this.props.number}">{this.props.number}</button>
        )

    }
}

function mapStateToProps() {
    return {

    }

}
function mapDispatchToProps(dispatch) {

    return {
        digitClicked : function (digit) {
            dispatch(digitPressed(digit));

        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Digit);