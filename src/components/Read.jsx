import React, { useState, useEffect } from "react";
import axios from "axios";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);                       //42:34
  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <tbody key={eachData.id}>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <button className="btn bg-success">Edit</button>
                </td>
                <td>
                  <button className="btn bg-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
