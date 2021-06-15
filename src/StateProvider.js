import React, { createContext, useContext, useReducer } from "react";

//prepares datalayer
export const StateContext = createContext();

//wrap app and provide datatlayar
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pulls from datalayer
export const useStateValue = () => useContext(StateContext);
