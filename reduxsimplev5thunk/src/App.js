import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.onAgeUp(1)),
    onAgeDown: () => dispatch(actionCreator.onAgeDown(1))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
