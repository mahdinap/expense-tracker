import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function AddNewExpense(prop) {
  const { onAddExpense } = prop;
  const [expense, setExpense] = useState([]); 
  const [formDate, setFormData] = useState({
    name: "",
    amount: "",
    date: null,
  });

  const [showPicker, setShowPicker] = useState(false);
  

  const addEmoji = (emoji) => {
    setFormData((prev) => ({
      ...prev,
      name: prev.name + emoji.native,
    }));
    setShowPicker(false);
  };

  function handleChange(e) {
    const { name, value } = e.target;
      if (name === "amount") {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    return; 
  }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function addNewExpense() {
    const newExpense = {
      ...formDate,
      amount: Number(formDate.amount),
      date: formDate.date || new Date().toString(),
    };
    setFormData({ name: "", amount: "", date: null });
    onAddExpense(newExpense);
    setExpense((prev) => [...prev, newExpense]);
  }

  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <div className="form">
            <div className="expense-fild">
            <Input
              name="name"
              placeholder="Expense title"
              onChange={handleChange}
              value={formDate.name}
            />
            <button
              onClick={() => setShowPicker(!showPicker)}
              className="ml-2 p-2 border rounded emojiBtn"

            >
              😀
            </button>
            </div>

            <Input
              name="amount"
              type="text"
              placeholder="Amount"
              onChange={handleChange}
              value={formDate.amount}
            />

            {showPicker && (
              <div style={{ position: "absolute", top: "40px", zIndex: 1000 }}>
                <Picker data={data} onEmojiSelect={addEmoji} />
              </div>
            )}

            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={formDate.date}
              onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
              placeholderText="Date"
            />
          </div>

          <Button className="addExpense" onClick={addNewExpense} />
        </div>
    </>
  );
}
