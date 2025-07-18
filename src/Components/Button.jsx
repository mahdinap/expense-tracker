export default function Button(props){
    const {value,onClick}=props
    return<>
    <button type="button" value={value} onClick={onClick}>Add Expense</button>
    </>
}