import React, { useEffect, useRef, useState } from "react";
import Admin from "..";
import axios from "axios";

const ListOfStaffCovid = () => {
  const [listCovid, setListCovid] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cityCovid, setcityCovid] = useState([]);
  const [loading, setLoading] = useState(false);
  const input_find = useRef(null);
  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get("https://611b1bf022020a00175a4341.mockapi.io/Khaibaoyte")
      .then(function (response) {
        setFilter(
          response.data.filter((data) => {
            return cityCovid.map((ci) => ci.city).includes(data.city.toLowerCase());
          })
        );
        setListCovid(
          response.data.filter((data) => {
            return cityCovid.map((ci) => ci.city).includes(data.city.toLowerCase());
          })
        );
      });
    return () => {
      setState("");
    };
  }, [cityCovid]);


  useEffect(() => {
    setLoading(true);
    axios
      .get("https://611b1bf022020a00175a4341.mockapi.io/ListOfCovid")
      .then(function (res) {
        setLoading(false);
        setcityCovid(res.data);
      });
  }, []);

  const onChange = (e) => {
    if (e.target.value !== "") {
      const listSearch = listCovid.filter((element) => {
        return element.fullname.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setListCovid(listSearch);
    } else {
      setListCovid(filter);
    }
  };

  return (
    <Admin>

      <div className="container mt-5 pt-5">
        <h3 className="text-center ">Danh sách nhân viên đi qua vùng dịch</h3>
        <div className="find-info mt-5">
          <input
            type="text"
            onChange={onChange}
            ref={input_find}
            placeholder={`Tìm kiếm nhân viên theo tên ... `}
          />
        </div>

        <table className="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Staff ID</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>City</th>
            </tr>
          </thead>

          {loading ? (
            <tbody>
              <tr>
                <td className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            </tbody>
          ):(
            <tbody>
              {listCovid.map((li, key) => (
                <tr key={key}>
                  <td>{li.id}</td>
                  <td>{li.id_card}</td>
                  <td>{li.fullname}</td>
                  <td>{li.phone_number}</td>
                  <td>{li.home_number}</td>
                  <td>{li.city}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </Admin>
  );
};

export default ListOfStaffCovid;
