export default function Button(props){
    const {value,onClick,className}=props
    return<>
    <button type="button" className={className} value={value} onClick={onClick}>Add Expense</button>
    </>
}