import * as React from "react";
//import app state context object (definition)
import { AppStateContext } from "./AppContext";

//import app components
import AppTitle from "./AppTitle";
import Counter from "./Counter";
import AppFooter from "./AppFooter";

//import global styles
import "./styles.css";

//set inital app state
const initialState = {
  //inital count set to 0
  count: 0,
  //dummy object that will become function later
  setState: {}
};

function App() {
  const [state, setState] = React.useState(initialState);
  // use console to check values
  // console.log("App..state....", state);
  // console.log("App..setState....", setState);
  return (
    <AppStateContext.Provider value={{ state, setState }}>
      <AppTitle />
      <div className="App">
        <Counter />
      </div>
      <AppFooter />
    </AppStateContext.Provider>
  );
}

export default App;
