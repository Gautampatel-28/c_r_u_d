import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();

    const header =  {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("click")
        axios.post("https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d", {
            name: name,     
            email: email,
            header,
        })

        .then(() => {
          history("/read")
      })
      .catch(error => {
          console.error("There was an error submitting the data:", error);
      })
    };
  return (
    <>
    <h2>Create</h2>
    <button className="btn btn-primary">Show Data</button>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email address   
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
