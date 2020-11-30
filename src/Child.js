import React, { useContext, useState } from "react";
import "./Main.css";
import { GlobalContext } from "./transContex";

function Child() {
  let { transctions, addTransction } = useContext(GlobalContext);
  let [amount, setAmount] = useState("");
  let [desc, setDesc] = useState("");

  const handelAddition = (event) => {
    event.preventDefault();
    addTransction({
      amount,
      desc,
    });
    setAmount(" ");
    setDesc(" ");
  };

  return (
    <div className="box">
      <h1>Expense Tracker </h1> <br />
      <h1>
        Balance <br /> $260.00{" "}
      </h1>{" "}
      <br />
      <h1 className="head">
        Income <br /> $260.00{" "}
      </h1>{" "}
      &emsp;&emsp;
      <h1 className="head">
        Expense <br /> $260.00{" "}
      </h1>{" "}
      <br />
      <h1>History </h1> <hr />
      <ul className="transctionList">
        {transctions.map((transobj, index) => {
          return (
            <li key={index}>
              <span>{transobj.desc}</span>
              <span>{transobj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h1>Add Transction </h1> <hr />
      <form onSubmit={handelAddition}>
        <label>Text</label>
        <br />
        <input
          type="text"
          value={desc}
          onChange={(ev) => setDesc(ev.target.value)}
        ></input>
        <br />
        <label>Amount</label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(ev) => setAmount(ev.target.value)}
        ></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Child;
