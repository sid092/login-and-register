import React from "react"
import "./Register.css"

const Register = () => {
    return(
        <>
        <div className="register">
            <h1>Register</h1>
            <input type= "text" placeholder="Enter Your Name"/>
            <input type= "text" placeholder="Enter Your Email"/>
            <input type= "password" placeholder="Enter Your Password"/>
            <input type= "password" placeholder="Enter Your Re-enter Password"/>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
        </>
    )
}

export default Register