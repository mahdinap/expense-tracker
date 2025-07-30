export default function Input(props){
    const {placeholder,onChange,name}=props
    return<>
    <input type="text" onChange={onChange} placeholder={placeholder} name={name}/>
    </>
}