import React, { useState } from "react"
import './Login.css'

const Login = () => {
    const [user,setUser]=useState({email:'',password:''})
    
    function handleChange(e){
        const {name,value}= e.target
        setUser({...user,[name]:value})
        // console.log(user)
    }
    return(
        <>
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Enter your Email" name='email' value ={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Enter your password" name='password' value ={user.password} onChange={handleChange}/>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
        </>
    )
}
export default Login