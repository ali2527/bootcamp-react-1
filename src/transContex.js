import React,{createContext, useReducer} from "react";
import TransctionReducer from "./transReducer";

const initialTransctions = [
    { amount: 500, Desc: "cash" },
    { amount: -50, Desc: "food" },
    { amount: -10, Desc: "book" },
  ];

  export const TransctionContex = createContext(initialTransctions);
  

  export const Transctionprovider = ({children}) =>  {
    let [state,dispatch] = useReducer(TransctionReducer,initialTransctions)
    
    function addtransction(transobj){
        dispatch({
            type : "Add",
            payload: {
                amount: transobj.amount,
                Desc: transobj.Desc

            }
        })
    }

    return(
        <TransctionContex.provider value={{

            transctions: state,
            addtransction
        }        
        }>
            {children}
        </TransctionContex.provider>

    )
  }
  

  