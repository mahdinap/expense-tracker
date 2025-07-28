import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNewExpense() {
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
      date:formDate.date || new Date().toString
    }
    setExpense((prev)=>[...prev,newExpense])
    setFormData({name:"",amount:"",date:null})
  }
  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <div className="form">
          <div className="inputs">
            <Input
              placeholder="Expense title"
              onChange={handleChange}
              value={expense.name}
            />
            <Input
              placeholder="Amount"
              onChange={handleChange}
              value={expense.amount}
            />

            <DatePicker
              dateFormat="yyyy/MM/dd"
              // selected={selectedDate}
              onChange={handleChange}
            />
          </div>

          <Button onClick={() => console.log(expense)} />
        </div>
      </div>
    </>
  );
}
