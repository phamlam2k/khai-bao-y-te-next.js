import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import Selection from "./components/Selection";
import Question from "./components/Question";
import DetailQuestionTable from "./components/DetailQuestion_Table";
import Button from "./components/Button";
import { ToastContainer, toast } from "react-toastify";
import {
  validateValue,
  _isEmail,
  _isYear,
  _isPhoneNumber,
  _isNumber,
} from "./scripts/Validate";
import * as axiosCallAPI from "./api/index";
import Staff from "../index";


function FormHealDeclaration(props: any) {
  let history = useHistory();
  const [disable, setDisable] = useState(false);
  const [province, setProvince] = useState([]);
  useEffect(() => {
    async function getListPro() {
      await axiosCallAPI.getList("get", "province", null).then((res: any) => {
        if (res.data.results !== null) {
          const { results } = res.data;
          setProvince(results);
        }
      });
    }

    getListPro();
  }, []);
  const [flagError, setFlagError] = useState(true);
  const onhandleChange = (data: {name: string, value: string}) =>{
    console.log(data);
    switch (data.name) {
      case "phone_number":
        console.log(
          validateValue(
            "input_phone",
            data.value,
            "Phone number must be only contained number!"
          )
        );
        break;
      case "email_address":
        console.log(
          validateValue(
            "input_email",
            data.value,
            "Format of email is not correct!"
          )
        );
        break;
      case "id_card":
        console.log(
          validateValue(
            "input_idCard",
            data.value,
            "Id must be only contained number"
          )
        );
        break;
      case "year_Brith":
        console.log(
          validateValue(
            "input_yearBrith",
            data.value,
            "Year must be contained 4 number(YYYY)"
          )
        );
        break;
      default:
        break;
    }
  };

  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const handleSmProvince = async (dataSubmit: {name: string, type: string, index: number, title: string}) => {
    console.log(dataSubmit);
    if (dataSubmit != null) {
      switch (dataSubmit.type) {
        case "province":
          await axiosCallAPI
            .getList("get", `province/district/${dataSubmit.index}`)
            .then((res: any) => {
              setDistrict(res.data.results);
            });
          break;
        case "district":
          await axiosCallAPI
            .getList("get", `province/ward/${dataSubmit.index}`)
            .then((res: any) => {
              setWard(res.data.results);
            });
          break;
        default:
          break;
      }
    }
  };
  const _func_CheckBeforeSubmit = (input_data: any) =>{
    let flag = true;
    if (input_data == null) return false;
    console.log(input_data[0]);
    return flag;
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = document.getElementById("Form_Submit_Heal") as HTMLFormElement;
    var data: any = new FormData(form);
    console.log(data);
    let _TempData: any = {};
    for (let [name, value] of data) {
      _TempData = {
        ..._TempData,
        [name]: value,
      };
    }
    console.log(_TempData);
    if (_TempData != null && _func_CheckBeforeSubmit(_TempData)) {
      let {
        fullname,
        id_card,
        year_Brith,
        city,
        district,
        ward,
        home_number,
        phone_number,
        email_address,
        question_yoursTravel,
        question_symptomOfIllnes,
        gender_group,
        question1,
        question2,
        question3,
      } = _TempData;
      console.log(_TempData);
      if (
        _isPhoneNumber(phone_number) &&
        _isEmail(email_address) &&
        _isYear(year_Brith) &&
        _isNumber(id_card)
      ) {
        axiosCallAPI
          .Method_Post("POST", "Khaibaoyte", {
            fullname,
            id_card,
            year_Brith,
            city,
            district,
            ward: ward,
            home_number,
            phone_number,
            email_address,
            question_yoursTravel,
            question_symptomOfIllnes,
            gender_group,
            question1,
            question2,
            question3,
          })
          .then((res) => {
            toast.success("G???i th??nh c??ng. C???m ??n b???n ???? khai b??o", {
              hideProgressBar: true,
            });
            setTimeout(() => {
              history.goBack();
            }, 2500);
          });
      } else {
        // alert('D??? li???u b???n nh???p ch??a h???p l???! M???i b???n ki???m tra l???i d??? li???u');
        toast.error(
          "D??? li???u b???n nh???p ch??a h???p l???! M???i b???n ki???m tra l???i d??? li???u",
          {
            hideProgressBar: true,
          }
        );
        setDisable(false);
      }
    } else {
      // alert("D??? li???u b???n nh???p kh??ng h???p l???!");
      toast.error("D??? li???u b???n nh???p kh??ng h???p l???!", {
        hideProgressBar: true,
      });
      setDisable(false);
    }
  };
  return (
    <Staff>
      
    <form
      className="container mt-5"
      method="post"
      id="Form_Submit_Heal"
      onSubmit={handleSubmit}
      action="https://611f85979771bf001785c9bf.mockapi.io/api/phieukhaiyte"
    >
      <ToastContainer />
      <div className='icon-back mb-3'>
        <Link href={`/home/nhanvien/list`}>
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
      <h3 className="text-center">Khai b??o y t??? cho nh??n vi??n</h3>
      <h6 className="text-center">( PH??NG CH???NG D???CH COVID-19 )</h6>
      <p className="text-danger text-center">
        Khuy???n c??o: Khai b??o th??ng tin sai l?? vi ph???m ph??p lu???t Vi???t Nam v?? c??
        th??? x??? l?? h??nh s???
      </p>
      <div className="row mt-5">
        <div className="col col-12 col-md-6">
          <Input
            label="H??? T??n "
            required={true}
            name="fullname"
            onhandleChange={onhandleChange}
          />
        </div>
        <div className="col-12 col-md-6" id="input_idCard">
          <Input
            label="S??? h??? chi???u / CMND / CCCD"
            name="id_card"
            onhandleChange={onhandleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6" id="input_yearBrith">
          <Input
            label="N??m sinh"
            required={true}
            name="year_Brith"
            onhandleChange={onhandleChange}
          />
        </div>
        <div className="col col-md-6">
          <RadioButton />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <p className="title_group">?????a ch??? li???n h??? t???i Vi???t Nam</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <Selection
            label="T???nh th??nh"
            name="city"
            obj={province}
            handleSmProvince={handleSmProvince}
          />
        </div>
        <div className="col-12 col-md-4">
          <Selection
            label="Qu??n/Huy???n"
            name="district"
            district={district}
            handleSmProvince={handleSmProvince}
          />
        </div>
        <div className="col-12 col-md-4">
          <Selection
            label="Ph?????ng/X??"
            name="ward"
            ward={ward}
            handleSmProvince={handleSmProvince}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <Input
            label="S??? nh??, ph???, t??? d??n ph???/th??n/?????i"
            name="home_number"
            required={true}
            onhandleChange={onhandleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6" id="input_phone">
          <Input
            label="S??? ??i???n tho???i"
            name="phone_number"
            id="phone_number"
            required={true}
            onhandleChange={onhandleChange}
          />
        </div>
        <div className="col col-md-6" id="input_email">
          <Input
            label="Email"
            name="email_address"
            required={true}
            onhandleChange={onhandleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          <Question
            question="Trong v??ng 14 ng??y qua, Anh/Ch??? c?? ?????n t???nh/th??nh ph???, qu???c gia/v??ng l??nh th??? n??o (C?? th??? ??i qua nhi???u n??i)"
            name="question_yoursTravel"
          />
        </div>
        <div className="col-12 col-md-12">
          <Question
            question="Trong v??ng 14 ng??y qua, Anh/Ch??? c?? th???y xu???t hi???n ??t nh???t 1 trong c??c d???u hi???u: s???t, ho, kh?? th???, vi??m ph???i, ??au h???ng, m???t m???i kh??ng?"
            name="question_symptomOfIllnes"
          />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <DetailQuestionTable />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-md-12">
          {!disable ? (
            <Button bgc={"bg-green"} />
          ) : (
            <button className="btn btn-primary btn-success" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Loading...</span>
            </button>
          )}
        </div>
      </div>
    </form>
    </Staff>
  );
}

export default FormHealDeclaration;
