import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Admin from "..";

const ListOfStaff = (props) => {
  const input_find = useRef(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getListOfStaff() {
      await axios
        .get(
          "get",
          "https://611b1bf022020a00175a4341.mockapi.io/Khaibaoyte",
          null
        )
        .then(function (response) {
          setLoading(false);
          setFilter(response.data);
          setList(response.data);
        });
    }
    getListOfStaff();
  }, []);

  const onDelete = (value_id) => {
    if (window.confirm("Do you really want to delete this item ?")) {
      async function deleteElement() {
        await axios
          .delete(`https://611b1bf022020a00175a4341.mockapi.io/Khaibaoyte/${value_id}`)
          .then(() => {
            alert("Bạn đã xóa thành công");
          })
          .catch((err) => {
            console.log(err);
          });
      }

      deleteElement();

      const list_clone = [...list];

      setList(list_clone.filter((li) => li.id !== value_id));
    }
  };

  const onChange = (e) => {
    if (e.target.value !== "") {
      const listSearch = list.filter((element) => 
         element.fullname.toLowerCase().includes(
          e.target.value.toLowerCase()
        )
      );
      setList(listSearch);
    } else {
      setList(filter);
    }
  };

  return(
  <Admin >

    <div className="container mt-5 pt-5">
      <h3 className="text-center ">Danh sách nhân viên</h3>

      <div className="find-info mt-5">
        <input
          type="text"
          onChange={onChange}
          ref={input_find}
          placeholder="Tìm kiếm nhân viên theo tên ... "
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
            <th>Button</th>
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
        ) : (
          <tbody>
            {list.map((li, index) => (
              <tr key={index}>
                <td>{li.id}</td>
                <td>{li.id_card}</td>
                <td>{li.fullname}</td>
                <td>{li.phone_number}</td>
                <td>{li.home_number}</td>
                <td>{li.city}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(li.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  </Admin>
  );
};

export default ListOfStaff;
