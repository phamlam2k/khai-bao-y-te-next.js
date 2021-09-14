import React, { FC } from "react";

interface Props{
  label: String,
  required?: boolean,
  name: string,
  id?: string,
  onhandleChange: (p: {name: string, value: string}) => void
}

function Input(props: Props) {
  const { label, required, name } = props;
  
  const onhandleChange = (e: any) => {
    let { name, value } = e.target;

    let data = {
        name: name,
        value: value
    }
    
    
    props.onhandleChange(data);

    
  };
  return (
    <div className="input-container">
      <label>
        {label}
        <span>{required ? "(*)" : ""}</span>{" "}
      </label>
      <input name={name} type="text" onChange={onhandleChange} required/>
    </div>
  );
}

export default Input;
