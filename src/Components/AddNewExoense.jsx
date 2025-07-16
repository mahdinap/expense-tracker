import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNewExpense() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <div className="form">
          <div className="inputs">
            <Input placeholder="Expense title" />
            <Input placeholder="Amount" />

             <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
          </div>
          <Button />
        </div>
      </div>
    </>
  );
}
