import * as React from "react";
import { AppStateContext } from "./AppContext";

const Counter = () => {
  const { state, setState } = React.useContext(AppStateContext);
  // check values
  // console.log("Counter...state...", state);
  // console.log("Counter...setState...", setState);
  return (
    <>
      <h3>Counter component</h3>
      <h3>Count: {state.count}</h3>
      <button
        onClick={() => {
          //think about shalow comparison
          //when working with complex objects
          //use redux reducer pattern returning new object
          setState({
            count: state.count + 1
          });
          console.log("increment");
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          //think about shalow change comparison
          //when working with complex state object
          //use redux reducer pattern returning new object
          setState({
            count: state.count - 1
          });
          console.log("decrement");
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default Counter;
