export default function Input(props){
    const {placeholder,onChange,name,type,inputMode,pattern,value}=props
    return<>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} pattern={pattern} inputMode={inputMode} />
    </>
}