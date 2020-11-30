import React, { createContext, useReducer } from "react";
import TransctionReducer from "./transReducer";

const initialTransctions = [
  { amount: 550, desc: "cash" },
  { amount: -50, desc: "food" },
  { amount: -10, desc: "book" },
];

export const GlobalContext = createContext(initialTransctions);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransctionReducer, initialTransctions);

  function addTransction(transobj){
    dispatch({
      type: "ADD_TRANSCTION",
      payload: {
        amount: transobj.amount,
        desc: transobj.desc
      },
    });
  }

  return (
    <GlobalContext.Provider value={{
        transctions: state,
        addTransction,
      }}>
      {children}
      </GlobalContext.Provider>);
}
