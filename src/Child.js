import React ,{useContext} from "react";
import "./Main.css";
import {TransctionContex} from "./transContex"


function Child() {

    const transctions = useContext(TransctionContex)

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
            <li>
              <span>{transobj.Desc}</span>
              <span>{transobj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h1>Add Transction </h1> <hr />
      <form>
        <label>Text</label>
        <br />
        <input type="text"></input>
        <br />
        <label>Amount</label>
        <br />
        <input type="number"></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Child;
