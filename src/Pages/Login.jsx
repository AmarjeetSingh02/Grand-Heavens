import React from 'react'
import"./Login.css";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div>
      <div className="Login-form">
        <div className="Login-card">
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <div className="login-btn">
                <button>Login</button>
            </div>
            <Link to="/register">
            <p>Register</p></Link>

        </div>
      </div>
    </div>
  )
}

export default Login
