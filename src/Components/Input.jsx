export default function Input(props){
    const {placeholder,onChange}=props
    return<>
    <input type="text" onChange={onChange} placeholder={placeholder}/>
    </>
}