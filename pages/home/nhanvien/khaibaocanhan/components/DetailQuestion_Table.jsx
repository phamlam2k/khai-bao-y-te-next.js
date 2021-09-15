import React from "react";

function DetailQuestion_Table() {
  return (
    <>
      <h6 className="question_title">
        Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?
      </h6>
      <table border="1">
          <tr>
            <th colSpan="4px"></th>
            <th>Có</th>
            <th>Không</th>
          </tr>
        <tbody>
          <tr>
            <td colSpan="4px">
              Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19 (*)
            </td>
            <th>
              <input type="radio" name="question1" value="yes" />
            </th>
            <th>
              <input type="radio" name="question1" value="no" defaultChecked />
            </th>
          </tr>

          <tr>
            <td colSpan="4px">Người từ nước có bệnh COVID-19 (*)</td>
            <th>
              <input type="radio" name="question2" value="yes" />
            </th>
            <th>
              <input type="radio" name="question2" value="no" defaultChecked />
            </th>
          </tr>

          <tr>
            <td colSpan="4px">
              Người có biểu hiện (Sốt, ho, khó thở , Viêm phổi) (*)
            </td>
            <th>
              <input type="radio" name="question3" value="yes" />
            </th>
            <th>
              <input type="radio" name="question3" value="no" defaultChecked />
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DetailQuestion_Table;