import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    async function handleRegister() {
        const registerData = {
            username: username,
            password: password,
            email: email,
            role: role,
        };
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(registerData),
                }
            );

            if (response.ok) {
                alert("Registration successful! You can now log in.");
                window.location.href = "/login";
            } else {
                alert("Registration failed. Please try again.");
                console.error("Registration error:", response.statusText);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again later.");
        }
    }
    return (
        <div className="row card m-5 p-5 justify-content-center">
            <h1>Register Page</h1>
            <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" className="form-control mb-2" />
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="form-control mb-2" />
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="form-control mb-2" />
            <input onChange={e => setRole(e.target.value)} type="text" placeholder="Role" className="form-control mb-2" />
            <button onClick={handleRegister} className="btn btn-primary">Register</button>
        </div>
    );
}

export default Register;