import * as React from "react";

export interface AppStateContextInterface {
  state: {
    count: number;
  };
  setState: Function;
}

export const AppStateContext = React.createContext({
  state: { count: 0 },
  setState: (state: Object) => {
    console.log("dummy function");
  }
});

//export default AppContext;
