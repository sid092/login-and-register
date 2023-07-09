import React, { useState } from "react"
import "./Register.css"

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: '',
    })
    function handleChange(e) {
        const { name, value } = e.target
        console.log(e.target)
        setUser({
            ...user,
            [name]: value
        })
        // setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }
    return (
        <>
            <div className="register">
                <h1>Register</h1>
                <input type="text" placeholder="Enter Your Name" name='name' value={user.name} onChange={handleChange} />
                <input type="text" placeholder="Enter Your Email" name='email' value={user.email} onChange={handleChange} />
                <input type="password" placeholder="Enter Your Password" name='password' value={user.password} onChange={handleChange} />
                <input type="password" placeholder="Re-enter Password" name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} />
                <div className="button">Register</div>
                <div>or</div>
                <div className="button">Login</div>
            </div>
        </>
    )
}

export default Register