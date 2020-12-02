import React, { useContext, useState } from "react";
import { GlobalContext } from "./transContex";
import "./Main.css";

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
    setAmount("");
    setDesc("");
  };

  return (
    <div className="container box p-20  text-center ">
      <h1 className="m-auto d-inline">Expense Tracker </h1> <br />
      <h1 className="m-auto d-inline">
        Balance <br /> $260.00{" "}
      </h1>
      <br />
      <div className="infoBox"> </div>
      <br />
      <h1 className="head m-auto d-inline">
        Income <br /> $260.00{" "}
      </h1>{" "}
      &emsp;&emsp;
      <h1 className="head m-auto d-inline">
        Expense <br /> $260.00{" "}
      </h1>{" "}
      <br />
      <h1 className="m-auto ">History </h1> <hr />
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
    
      <form onSubmit={handelAddition} className="p-15">
        <input
          type="Number"
          class="form-control"
          value={amount}
          onChange={(ev) => setAmount(ev.target.value)}
          placeholder="Enter Income or Expence Amount"
          required="required"
        />
        <br/>

        <input
          type="Text"
          class="form-control"
          value={desc}
          onChange={(ev) => setDesc(ev.target.value)}
          placeholder="Enter Description"
          required="required"
        />
        <br/>

        <input class="btn btn-primary btn-block" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Child;
