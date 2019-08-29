import * as React from "react";
import { AppStateContext } from "./AppContext";

import * as style from "./AppFooter.module.css";

export const AppFooter = () => {
  const { state } = React.useContext(AppStateContext);
  return (
    <section className={style.AppFooter}>
      <h2>App footer component</h2>
      <h2>Count: {state.count}</h2>
      <p className={style.AppFooterExplain}>
        How it works? <br />
        <br />
        The context object (AppStateContext) resembles useState hook "pattern".
        It has state object and setState function. At the top level, where
        context provider is provided to app, useState hook is applied. Then the
        values of useState hook (state and setState) are provided to context
        provider as intial context values.
        <ul>
          <li>
            See App.tsx for the implementation of the context provider and
            integration with useState hook.
          </li>
          <li>
            See AppTitle.tsx for extracting the context count value using
            useContext hook.
          </li>
          <li>
            See Counter.tsx for manipulating shared context value using
            useContext hook.
          </li>
        </ul>
      </p>
    </section>
  );
};

export default AppFooter;
