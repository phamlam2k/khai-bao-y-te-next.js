import React from "react";

function RadioButton() {

  
  const handleSelect = (e: React.MouseEvent) => {
    const {value, name} = e.target as HTMLInputElement;
    const valueChecked = {
      name: name,
      value: value,
    }
    console.log(valueChecked);
  }

  return (
    <div className="radiobutton_container">
      <p>Giới tính</p>
      <div className="input_container">

        <div className="input_group">
            <input type="radio" value="male" name="gender_group" required onClick={handleSelect} />
            <label htmlFor="male">Nam</label>
        </div>
        <div className="input_group">
            <input type="radio" value="female" name="gender_group" required onClick={handleSelect}/>
            <label htmlFor="female">Nữ</label>
        </div>
        <div className="input_group">
            <input type="radio" value="other" name="gender_group" required onClick={handleSelect}/>
            <label htmlFor="other">Khác</label>
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
