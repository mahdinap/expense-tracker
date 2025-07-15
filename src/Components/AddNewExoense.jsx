import Button from "./Button";
import Input from "./Input";
export default function AddNewExpense() {
  return (
    <>
      <div className="ExpenseField">
        <h4>+Add New Expense</h4>
        <Input placeholder="Expense title" />
        <Button />
      </div>
    </>
  );
}
