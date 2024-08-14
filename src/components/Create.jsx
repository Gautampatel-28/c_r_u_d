import React from "react";
import { useState } from "react";
import axios from "axios";

const Create = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const header =  {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = () => {
        axios.post("https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d", {
            name: name,     //19:00
            email: email,
            header,
        });
    };
  return (
    <>
    <h2>Create</h2>
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
