export const validateValue = (rootContainer, data, warningText) => {
  console.log(data);
  var rootName = document.getElementById(rootContainer);
  var p = document.createElement("p");

  p.classList = "warning";
  switch (rootContainer) {
    case "input_name":
      if (data.length > 254) {
        p.innerText = "name too length! limit word is 254";
        rootName.appendChild(p);
      } else {
        let text_Warning = document.getElementById("warning");
        if (!isString(data)) {
          if (text_Warning == null) {
            p.innerText = warningText;
            p.setAttribute("id", "warning");

            // inputName.classList.add('ip_warning');
            rootName.appendChild(p);
          }
        }
        if (isString(data)) {
          rootName.removeChild(text_Warning);
        }
      }
      break;
    case "input_phone":
      let text_Warning_Phone = document.querySelector(".warning_phone-number");
      let flag_inputPhone = false;
      if (data.length < 10 || data.length > 10) {
        if (text_Warning_Phone === null) {
          p.innerText = "Length of phone inside 9 to 11 number!";
          p.classList.add("warning_phone-number");
          rootName.appendChild(p);
        }
      } else if (!isNumber(data)) {
        if (text_Warning_Phone == null) {
          p.innerText = warningText;
          // p.setAttribute("id", "warning");
          p.classList.add("warning_phone-number");

          // inputName.classList.add('ip_warning');
          rootName.appendChild(p);
        }
      } else if (
        (isNumber(data) && text_Warning_Phone !== null && data.length === 10) ||
        (data === "" && text_Warning_Phone !== null)
      ) {
        rootName.removeChild(text_Warning_Phone);
        flag_inputPhone = true;
      }
      return flag_inputPhone;
    case "input_email":
      let flag_email = false;
      let text_Warning_email = document.getElementById("warning_email");
      if (!isEmail(data)) {
        if (text_Warning_email === null) {
          p.innerText = warningText;
          p.setAttribute("id", "warning_email");

          // inputName.classList.add('ip_warning');
          rootName.appendChild(p);
        }
      } else if (isEmail(data)) flag_email = true;

      if (
        (isEmail(data) && text_Warning_email !== null) ||
        (data.length === 0 && text_Warning_email !== null)
      ) {
        rootName.removeChild(text_Warning_email);
      }
      return flag_email;

    case "input_idCard":
      let flag_idCard = false;
      let text_Warning_idCard = document.getElementById("warning_idCard");
      if (!isNumber(data)) {
        if (text_Warning_idCard === null) {
          p.innerText = warningText;
          p.setAttribute("id", "warning_idCard");

          rootName.appendChild(p);
        }
      }
      else if(isNumber(data)) flag_idCard = true;
      if (
        (isNumber(data) && text_Warning_idCard !== null) ||
        (data.length === 0 && text_Warning_idCard !== null)
      ) {
        rootName.removeChild(text_Warning_idCard);
        
      }
      return flag_idCard;

    case "input_yearBrith":
      let text_Warning_yearBrith = document.getElementById("warning_yearBrith");
      let flag_yearBrith = false;
      if (!isYear(data)) {
        if (text_Warning_yearBrith === null) {
          p.innerText = warningText;
          p.setAttribute("id", "warning_yearBrith");

          rootName.appendChild(p);
        }
      }
      if (
        (isYear(data) && text_Warning_yearBrith !== null) ||
        (data.length === 0 && text_Warning_yearBrith !== null)
      ) {
        rootName.removeChild(text_Warning_yearBrith);
        flag_yearBrith = true;
      }
      return flag_yearBrith;
    default:
      console.log("Hãy nhập dữ liệu");
  }
};
//check isString
function isString(str) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) > -1) flag = false;
  }
  console.log(flag);
  return flag;
}
//check number
function isNumber(str) {
  return !isNaN(parseInt(str)) && isFinite(str);
}
//check Email
function isEmail(str) {
  var re = new RegExp("[A-Z0-9a-z._%+-]+@[A-Z0-9-a-z._%+-]+.+[A-Za-z]{2,4}");
  return re.test(str);
}

function isYear(str) {
  return isNumber(str) && str.length === 4;
}


//Define function to check condition submit



export const _isEmail = (str) => {
  var re = new RegExp("[A-Z0-9a-z._%+-]+@[A-Z0-9-a-z._%+-]+.+[A-Za-z]{2,4}");
  return re.test(str);
}

export const _isYear = (str) =>{
  return isNumber(str) && str.length === 4;
}

export const _isPhoneNumber = (str) => {
  if(str.length !== 10) return false;
  return isNumber(str);

}

export const _isNumber = (str) =>{
  return !isNaN(parseInt(str)) && isFinite(str);
}

