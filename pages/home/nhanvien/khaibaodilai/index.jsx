import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Selector from "./components/Selector";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import Staff from "../index";
const MoveDeclaration = (props) => {
  let history = useHistory();
  const [disable, setDisable] = useState(false);
  const [province, setProvice] = useState("");
  const [district, setDistrict] = useState("");
  const [districtDestination, setDistrictDestination] = useState("");
  const [ward, setWard] = useState("");
  const [wardDestination, setWardDestination] = useState("");
  const [value, setValue] = useState({
    vehicle: "",
    provinceSelected: "",
    districtSelected: "",
    wardSelected: "",
    provinceDestinationSelected: "",
    districtDestinationSelected: "",
    wardDestinationSelected: "",
    vehicleNumber: "",
    seatNumber: "",
    startDate: new Date(),
  });

  const { data } = useFetch("https://vapi.vnappmob.com/api/province");

  useEffect(() => {
    if (data) {
      setProvice(data);
    }
  }, [data]);
  useEffect(() => {
    setValue((value) => ({ ...value, wardSelected: "" }));
    setValue((value) => ({ ...value, districtSelected: "" }));
  }, [value.provinceSelected]);
  useEffect(() => {
    setValue((value) => ({ ...value, districtDestinationSelected: "" }));
    setValue((value) => ({ ...value, wardDestinationSelected: "" }));
  }, [value.provinceDestinationSelected]);
  useEffect(() => {
    setValue((value) => ({ ...value, wardSelected: "" }));
  }, [value.districtSelected]);
  useEffect(() => {
    setValue((value) => ({ ...value, wardDestinationSelected: "" }));
  }, [value.districtDestinationSelected]);
  const handleProvince = (e) => {
    setValue({ ...value, provinceSelected: e.target.value });
    if (e.target.value) {
      const district = province.results.filter(
        (word) => word.province_name === e.target.value
      )[0].province_id;
      fetch(
        `https://vapi.vnappmob.com/api/province/district/${district}`
      ).then((data) => {
        setDistrict(data);
      });
    }
  };
  const handleProvinceDestination = (e) => {
    setValue({ ...value, provinceDestinationSelected: e.target.value });
    if (e.target.value) {
      const district = province.results.filter(
        (word) => word.province_name === e.target.value
      )[0].province_id;
      fetch(
        `https://vapi.vnappmob.com/api/province/district/${district}`
      ).then((data) => {
        setDistrictDestination(data);
      });
    }
  };
  const useFetch = (url) => {
    const [data, setData] = useState();
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    return { data };
  };

  const postData = (url, data, handleSuccess, handleError) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(handleSuccess)
      .catch(handleError);
  }

  const handleDistrict = (e) => {
    setValue({ ...value, districtSelected: e.target.value });
    if (e.target.value) {
      const ward = district.results.filter(
        (word) => word.district_name === e.target.value
      )[0].district_id;
      fetch(`https://vapi.vnappmob.com/api/province/ward/${ward}`).then(
        (data) => {
          setWard(data);
        }
      );
    }
  };

  const handleDistrictDestination = (e) => {
    setValue({ ...value, districtDestinationSelected: e.target.value });
    if (e.target.value) {
      const ward = districtDestination.results.filter(
        (word) => word.district_name === e.target.value
      )[0].district_id;
      fetch(`https://vapi.vnappmob.com/api/province/ward/${ward}`).then(
        (data) => {
          setWardDestination(data);
        }
      );
    }
  };
  const existsData = (url) => {
    const result = fetch(url, { method: 'HEAD' });
    return result.ok;
  }
  const handleWard = (e) => {
    setValue({ ...value, wardSelected: e.target.value });
  };
  const handleWardDestination = (e) => {
    setValue({ ...value, wardDestinationSelected: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisable(true);
    const obj = {
      UserName: props.user.user.name,
      Vehicle: value.vehicle,
      PlaceOfStart: `${value.provinceSelected} , ${value.districtSelected}, ${value.wardSelected}`,
      PlaceOfFinish: `${value.provinceDestinationSelected} , ${value.districtDestinationSelected}, ${value.wardDestinationSelected}`,
      DateOfJourney: value.startDate,
      Number_Vehicle: value.vehicleNumber,
      Approval: false,
    };
    postData(
      `https://611b1bf022020a00175a4341.mockapi.io/TravelDeclaration`,
      obj,
      () => {
        toast.success("Post success !!", {
          hideProgressBar: true,
        });
        setTimeout(() => {
          history.goBack();
        }, 2500);
      },
      () => {
        toast.error("Please try again !!", {
          hideProgressBar: true,
        });
        setDisable(false);
      }
    );
  };
  return (
    <Staff>
      <div className="container my-4">
        <div className="icon-back mb-3">
          <Link href={`/home/nhanvien/list`}>
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
        <ToastContainer />
        <h2 className="text-center">TH??NG TIN KHAI B??O Y T???</h2>
        <h3 className="text-center">( Khai di chuy???n n???i ?????a )</h3>
        <p className="text-center text-danger">
          Khuy???n c??o: Khai b??o th??ng tin sai l?? vi ph???m ph??p lu???t Vi???t Nam v?? c??
          th??? x??? l?? h??nh s???
        </p>
        <p>Di chuy???n trong n?????c</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="vehicle">
              Ph????ng ti???n ??i l???i<span style={{ color: "red" }}> (*)</span>
            </label>
            <select
              className="form-control col-6"
              id="vehicle"
              onChange={(e) => setValue({ ...value, vehicle: e.target.value })}
              value={value.vehicle}
              required
            >
              <option value="">-Ch???n-</option>
              <option value="?? t??">?? t??</option>
              <option value="Xe m??y">Xe m??y</option>
            </select>
          </div>
          <Selector
            proviceTitle="N??i ??i"
            onChangeProvince={(e) => handleProvince(e)}
            provinceSelected={value.provinceSelected}
            province={province}
            districtTitle="??i???m ??i (Qu???n huy???n)"
            onChangeDistrict={(e) => handleDistrict(e)}
            districtSelected={value.districtSelected}
            district={district}
            wardTitle="??i???m ??i (Ph?????ng x??)"
            onChangeWard={(e) => handleWard(e)}
            wardSelected={value.wardSelected}
            ward={ward}
          />
          <Selector
            proviceTitle="N??i ?????n"
            onChangeProvince={(e) => handleProvinceDestination(e)}
            provinceSelected={value.provinceDestinationSelected}
            province={province}
            districtTitle="??i???m ?????n (Qu???n huy???n)"
            onChangeDistrict={(e) => handleDistrictDestination(e)}
            districtSelected={value.districtDestinationSelected}
            district={districtDestination}
            wardTitle="??i???m ?????n (Ph?????ng x??)"
            onChangeWard={(e) => handleWardDestination(e)}
            wardSelected={value.wardDestinationSelected}
            ward={wardDestination}
          />
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="vehicleNumber">
                S??? ph????ng ti???n<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="vehicleNumber"
                placeholder=""
                onChange={(e) =>
                  setValue({ ...value, vehicleNumber: e.target.value })
                }
                value={value.vehicleNumber}
                style={{ textTransform: "uppercase" }}
                required
              />
            </div>
            <div className="form-group col">
              <label htmlFor="seatNumber">S??? gh???</label>
              <input
                type="number"
                className="form-control"
                id="seatNumber"
                placeholder=""
                onChange={(e) =>
                  setValue({ ...value, seatNumber: e.target.value })
                }
                value={value.seatNumber}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="departureDate">
                Ng??y kh???i h??nh<span style={{ color: "red" }}> (*)</span>
              </label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                closeOnScroll={true}
                selected={value.startDate}
                onChange={(date) => setValue({ ...value, startDate: date })}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {!disable ? (
              <button type="submit" className="btn btn-success">
                G???i t??? khai
              </button>
            ) : (
              <button
                className="btn btn-primary btn-success"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm "
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Loading...</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </Staff>
  );
};

export default MoveDeclaration;
