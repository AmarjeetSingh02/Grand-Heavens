import React from 'react'
import"./Login.css";

const Login = () => {
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

        </div>
      </div>
    </div>
  )
}

export default Login
