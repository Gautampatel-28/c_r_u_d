import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d/${id}`
    ).then(() => {
      getData();
    })
  }

  const setToLocalStorage = (id,email,name) => {
      localStorage.setItem("id",id)
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" 
        onClick={() => {
              if (tabledark === 'table-dark') setTableDark("");
              else setTableDark("table-dark");
        }}
        />
`</div>
      <div className="d-flex justify-content-between m-2">
    <h2>Read Operation</h2>
    <Link to="/"> 
    <button className="btn btn-secondary">Show Data</button>
    </Link>
    </div> 
      <table className={`table ${tabledark}`}>
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
                <Link to="/update">
                  <button  type="button" className="btn btn-primary" onClick={() => setToLocalStorage(eachData.id,
                  eachData.name,
                  eachData.email)}>Edit{" "}</button>
                </Link>
                </td>
                <td>
                  <button  type="button" className="btn btn-danger" 
                  onClick={() => handleDelete(eachData.id)}>
                  Delete{" "}</button>
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
