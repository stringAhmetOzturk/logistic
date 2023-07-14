import React, { useState } from 'react';
import { useNavigate } from "react-router-dom" 
import axios from 'axios';
function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      axios.post(process.env.REACT_APP_API_URL+"auth/login", {
        username: username,
        password: password
      })
        .then(response => {
       
          if (response.data.message === "success") {
            
            navigate("/profile")
          } else {
            alert("Login fail.");
          }
        })
        .catch(error => {
          alert("An error occurred during login ??.");
        });
    } else {
      alert("Please enter username and password");
    }
}

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="form">
        <label>
          Benutzername:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Passwort:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" className="button" >Login</button>
      </form>
    </div>
  );
}

export default Login;