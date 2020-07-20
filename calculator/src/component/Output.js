import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div className="result">
                <h2>{this.props.result}</h2>
            </div>
        );
    }
}

export default Output;