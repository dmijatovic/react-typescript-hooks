# React useContext and useState hooks

This demo uses React CRA setup with typescript to test useContext and useState hooks.

## How the integration between context and hooks works in this demo?

The context object (AppStateContext) resembles useState hook "pattern". It has state object and setState function. At the top level, where context provider is provided to app, useState hook is applied. Then the values of useState hook (state and setState) are provided to context provider as intial context values.
See App.tsx for the implementation of the context provider and integration with useState hook.
See AppTitle.tsx for extracting the context count value using useContext hook.
See Counter.tsx for manipulating shared context value using useContext hook.
