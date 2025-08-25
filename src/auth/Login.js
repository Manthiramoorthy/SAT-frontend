import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        console.log(process.env.REACT_APP_BACKEND_URL);
        try {
            const loginData = {
                username: username,
                password: password,
            };
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "/";
            } else {
                alert("Login failed. Please check your credentials.");
                console.error("Login error:", response.statusText);
            }

        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
        }
    }


    return (
        <div className="row card m-5 p-5 justify-content-center">
            <div className="justify-content-center">
                <h1>Login Page</h1>
                {/* Add your login form or components here */}
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" className="form-control mb-2" />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="form-control mb-2" />
                <button onClick={handleLogin} className="btn btn-primary">Login</button>

                <a href="/register" className="btn btn-secondary ms-2">Register</a>
            </div>
        </div>
    );
}

export default Login;