import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNewExpense(prop) {
  const {onAddExpense}=prop
  const[expense,setExpense]=useState([]) // save items in a list
  const[formDate,setFormData]=useState({name:"",amount:"",date:null})
  
  function handleChange(e){
    const {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

  function addNewExpense(){
    const newExpense={
      ...formDate,
      amount:Number(formDate.amount),
      date:formDate.date || new Date().toString()
    }
    setFormData({name:"",amount:"",date:null})
    onAddExpense(newExpense); 
    setExpense((prev)=>[...prev,newExpense])
  }
  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <div className="form">
          <div className="inputs">
            <Input
            name="name"
              placeholder="Expense title"
              onChange={handleChange}
              value={formDate.name}
            />
            <Input
            name="amount"
              placeholder="Amount"
              onChange={handleChange}
              value={formDate.amount}
            />

            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={formDate.date}
               onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
               placeholderText="Date"
            />
          </div>

          <Button onClick={addNewExpense} />
        </div>
      </div>
    </>
  );
}
