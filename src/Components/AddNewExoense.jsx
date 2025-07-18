import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNewExpense() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expense, SetExpense] = useState({ name: "", amount: "", date: null });

  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <div className="form">
          <div className="inputs">
            <Input
              placeholder="Expense title"
              onChange={(e) => {
                SetExpense({ ...expense, name: e.target.value });
              }}
              value={expense.name}
            />
            <Input
              placeholder="Amount"
              onChange={(e) => {
                SetExpense({ ...expense, amount: e.target.value });
              }}
              value={expense.amount}
            />

            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                SetExpense({ ...expense, date: date.toISOString()});
              }}
            />
          </div>

          <Button onClick={() => console.log(expense, selectedDate)} />
        </div>
      </div>
    </>
  );
}
