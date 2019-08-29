import * as React from "react";

import { AppStateContext } from "./AppContext";

export const AppTitle = () => {
  const { state } = React.useContext(AppStateContext);

  return (
    <section className="AppTitle">
      <h2>useContext and useState hooks combined</h2>
      <p>Click on the buttons to change the counter value</p>
      <p>
        <strong>
          AppTitle component <br />
          Count: {state.count}
        </strong>
      </p>
    </section>
  );
};

export default AppTitle;
