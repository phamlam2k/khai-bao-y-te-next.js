import React from "react";
interface Props{
  question: string,
  name: string

}
function Question(props: Props) {
  const {question, name} = props
  return (
    <div className="question_container">
      <h6 className="question_title">{question}</h6>
      <div className="input_group">
        <label htmlFor="yes">Có</label>
        <input type="radio" value="yes" name={name} />
      </div>
      <div className="input_group">
        <label htmlFor="no">Không</label>
        <input type="radio" value="no " name={name} defaultChecked/>
      </div>
    </div>
  );
}

export default Question;
