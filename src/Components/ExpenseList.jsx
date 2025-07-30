export default function ExpenseList(props) {
  const {expenses}=props
  const total=expenses.reduce((sum,item)=>(sum+item.amount),0)
  return (
    <div className="ExpenseList">
      <h4>Expense List</h4>
      <ul className="ExpenseItemes">
        {expenses.map((item, index) => (
          <li key={index}>
            {item.name}-{item.amount}$-{item.date}
          </li>
        ))}
      </ul>
      <div className="total">
        <span><strong>Total:</strong> {total} $</span>
      </div>
    </div>
  );
}
