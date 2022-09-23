import { HTMLInputTypeAttribute } from "react";

const InputField = ({label, type, id, name, onChange}: {label: string, type: HTMLInputTypeAttribute, id: string, name: string, onChange?: any}) => {
    return (<div>
        <label>{label}</label>
        <input type={type} id={id} name={name} onChange={onChange} />
    </div>)
}

export { InputField }