import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");

        if (storedId && storedName && storedEmail) {
            setId(storedId);
            setName(storedName);
            setEmail(storedEmail);
        }
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://66bca0a424da2de7ff6b469a.mockapi.io/c-r-u-d/${id}`, {
            name: name,
            email: email,
        }).then(() => {
            navigate("/read");
        }).catch(err => {
            console.error("Update failed", err);
        });
    };

    return (
        <>
            <h2>Update Operation</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </>
    );
};

export default Update;
