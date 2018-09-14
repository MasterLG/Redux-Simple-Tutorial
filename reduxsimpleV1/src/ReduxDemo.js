import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {
    const initialState = {
      age: 21
    };
    //Reducer : state and action
    const myReducer = (state = initialState, action) => {
      const newState = { ...state };
      if (action.type === "ADD") {
        newState.age += action.val;
      }
      if (action.type === "SUBSTRACT") {
        newState.age -= action.val;
      }
      return newState;
    };
    //Store :reducer and state
    const store = createStore(myReducer);
    //Subscribe : Whenever there is a change in the state, it automatically runs this function
    //It is important to have it here right after store is created
    store.subscribe(() => {
      console.log("State changed to: " + JSON.stringify(store.getState()));
    });
    store.dispatch({ type: "ADD", val: 10 });
    store.dispatch({ type: "SUBSTRACT", val: 5 });

    //console.log("Store is now " + store.getState());

    return <div>hey</div>;
  }
}
export default ReduxDemo;
