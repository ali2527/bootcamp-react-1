import React, { useContext, useState } from "react";
import { GlobalContext } from "./transContex";
import "./Main.css";
import logo from "./logo (2).svg";
import up from "./up.png";
import down from "./down.png";

function Child() {
  let { transctions, addTransction , delTransction} = useContext(GlobalContext);
  let [amount, setAmount] = useState("");
  let [desc, setDesc] = useState("");

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transctions.length; i++){
      if (transctions[i].amount > 0) {
        income = income + transctions[i].amount;
      }}
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transctions.length; i++)
      if (transctions[i].amount < 0) {
        expense = expense + transctions[i].amount;
      }
    return expense;
  };

  const handelAddition = (event) => {
    event.preventDefault();
    addTransction({
      amount: Number(amount),
      desc,
    });
    setAmount("");
    setDesc("");
  };

  return (
    <div className="container box p-20  text-center ">
      <img src={logo} width="60%" />
      <h1 className="heading">Expense Tracker </h1>
      <h1 className="balance">
        YOUR BALANCE <br />
        <span>${getIncome() + getExpense()}.00</span>
      </h1>

      <div className="infoBox p-15 ">
        <div class="row">
          <div class="col-6">
            <h1 className="head m-auto d-inline">
              <span className="text-success">
                <img src={up} />
                <br /> Income
              </span>{" "}
              <br /> ${getIncome()}.00
            </h1>
          </div>
          <div class="col-6">
            <h1 className="head m-auto d-inline">
              <span className="text-danger">
                <img src={down} />
                <br />
                Expense
              </span>{" "}
              <br /> ${getExpense()}.00
            </h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="m-auto heading ">History </h1>
      <ul className="transctionList">
        {transctions.map((transobj, index) => {
          return (
            <li key={index} className={` ${transobj.amount > 0 ? "Listinc" : "Listexp"}`}>
              <span>{transobj.desc}</span>
              <span>{transobj.amount}</span>
              <button className="btn btn-danger" onClick={() => delTransction(index)}>	&#x1F5D1; </button>
            </li>
          );
        })}
      </ul>
      <br />
      <h1 className=" heading ">Add Transction </h1>

      <form onSubmit={handelAddition} className="p-15">
        <input
          type="Number"
          class="form-control"
          value={amount}
          onChange={(ev) => setAmount(ev.target.value)}
          placeholder="Enter Income or Expence Amount"
          required="required"
        />
        <br />

        <input
          type="Text"
          class="form-control"
          value={desc}
          onChange={(ev) => setDesc(ev.target.value)}
          placeholder="Enter Description"
          required="required"
        />
        <br />

        <input
          class="btn btn-primary btn-block"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </div>
  );
}

export default Child;
