import { useState } from "react";

export default function ExpenseList() {
  const[item,Setitem]=useState({name:"",amount:""})
  function AddNewitem(){
    Setitem({name:"ali",amount:10})
  }
  
  return (
    <div className="ExpenseList">
      <h4>Expense List</h4>
      <ul className="ExpenseItemes">
        <li>
          <div className="items">
            <span>lanch</span>
            <span>10$</span>
          </div>
        </li>
        <li>
          <div className="items">
            <span>haircut</span>
            <span>30$</span>
          </div>
        </li>
        <li>
            <div className="total">
                <span>Total: 40$</span>
            </div>
        </li>
      </ul>
    </div>
  );
}
