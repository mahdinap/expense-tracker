import Reactlogo from "../assets/react.svg";
export default function Header() {
  return (
    <div className="Header">
      <span className="emoji">💲</span>
      <h2>Expense Tracker</h2>
      <img src={Reactlogo} className="logo-spin logo" />
    </div>
  );
}
