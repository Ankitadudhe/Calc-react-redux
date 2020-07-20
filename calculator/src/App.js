import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Output from './component/Output';
import { updateCalculation, clearCalculation } from './component/Action';
class App extends Component {
  buttonPress = (e) => {
    this.buttonPressed(e.target.name);
  }
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    }
    else if (buttonName === "CE") {
      this.backspace();
    }
    else
      this.setState({
        result: this.state.result + buttonName
      });
    if (buttonName / 0) {
      return this.result = 'null'
    }
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  // reset for clear the result
  reset = () => {
    this.setState({
      result: " "
    })
  }
  //calculate function showing the result
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  render() {
    return (
      <fieldset><h1>Calculator</h1>

        <div className="buttons" >
          <Output result={this.state.result} />

          <button name="(" onClick={this.buttonPressed}>(</button>
          <button name="C" onClick={this.buttonPress}>C</button>
          <button name="CE" onClick={this.buttonPress}>CE</button>
          <button name=")" onClick={this.buttonPress}>)</button>

          <button name="1" onClick={this.buttonPress}>1</button>
          <button name="2" onClick={this.buttonPress}>2</button>
          <button name="3" onClick={this.buttonPress}>3</button>
          {/* <ButtonPlus  buttonPress={this.buttonPress}/> */}
          <button name="+" onClick={this.buttonPress}>+</button>

          <button name="4" onClick={this.buttonPress}>4</button>
          <button name="5" onClick={this.buttonPress}>5</button>
          <button name="6" onClick={this.buttonPress}>6</button>
          <button name="-" onClick={this.buttonPress}>-</button>

          <button name="7" onClick={this.buttonPress}>7</button>
          <button name="8" onClick={this.buttonPress}>8</button>
          <button name="9" onClick={this.buttonPress}>9</button>
          <button name="*" onClick={this.buttonPress}>&times;</button>


          <button name="." onClick={this.buttonPress}>.</button>
          <button name="0" onClick={this.buttonPress}>0</button>
          <button id="equal" name="=" onClick={this.buttonPress}>=</button>
          <button name="/" onClick={this.buttonPress}>/</button>
        </div>

      </fieldset>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
