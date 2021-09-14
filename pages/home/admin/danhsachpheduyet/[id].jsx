import React, { useEffect, useState } from "react";
import axios from "axios";

const ListOfStaffTrip = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  // const [count, setCount] = useState();
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    axios
    .get("https://611b1bf022020a00175a4341.mockapi.io/TravelDeclaration")
    .then(function (response) {
      setLoading(false);
      setList(response.data);
    });
    
  }, []);

  useEffect(() => {
    axios
      .get("https://611b1bf022020a00175a4341.mockapi.io/User")
      .then(function (response) {
        setUser(response.data);
      });

  }, [])
  
  const onChangeElement = (value_name, value_id, li, index) => {
    axios.put(
      `https://611b1bf022020a00175a4341.mockapi.io/TravelDeclaration/${value_id}`,
      { ...li, Approval: true }
    );

    setUser(
      user.map((u, index) => {
        if (u.user.name === value_name) {
          u.user.noteTravel = "Admin cho phép bạn đi lại";
          axios.put(
            `https://611b1bf022020a00175a4341.mockapi.io/User/${index + 1}`,
            { ...u }
          );
          return u;
        } else {
          return u;
        }
      })
    );

    var button = document.querySelectorAll(".btn-accept");

    button[index].classList.remove("btn-info");
    button[index].innerHTML = "Accepted";
    button[index].disabled = false;
  };

  useEffect(() => {
    list.map((li, index) => {
      if (li.Approval === true) {
        var button = document.querySelectorAll(".btn-accept");
        button[index].classList.remove("btn-info");
        button[index].innerHTML = "Accepted";
        button[index].disabled = false;
      }
    });
  }, [list]);

  const onDelete = (value_id) => {
    if (window.confirm("Do you want delete this item?")) {
      axios
        .delete(
          `https://611b1bf022020a00175a4341.mockapi.io/TravelDeclaration/${value_id}`
        )
        .then(function () {
          console.log("ko loi");
        })
        .catch(function (error) {
          console.log("bi loi");
        });

      const list_clone = [...list];

      setList(list_clone.filter((li) => li.id !== value_id));
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Place of start</th>
            <th>Place of finish</th>
            <th>Date</th>
            <th>Vehicle</th>
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
                <td>{li.UserName}</td>
                <td>{li.PlaceOfStart}</td>
                <td>{li.PlaceOfFinish}</td>
                <td>{li.DateOfJourney}</td>
                <td>{li.Vehicle}</td>
                <td>
                  <button
                    className="btn btn-info btn-accept"
                    onClick={() =>
                      onChangeElement(li.UserName, li.id, li, index)
                    }
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger mt-2"
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
  );
};

export default ListOfStaffTrip;
