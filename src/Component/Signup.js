import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import history from './History'
export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (

        <>
        {console.log(user)}
            <div className="login__text">
                <h1> Signup</h1>
                <p> Hello there , Login to start using WiSer !!</p>
            </div>
            <form >
                <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} />
                <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} />
                <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm password" onChange={handleChange} />
                <button type="submit"  >Signup</button>
                <p> Login into <Link to="/Login"  >  WiSer</Link> ecosystem</p> <br />
                <p> Forget password</p><p> Term and conditions</p>
            </form>
        </>

    )
}
