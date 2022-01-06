import React,{useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Login.css';
export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
     
        <div className="login__body">
               {console.log(user)}
            <div className="login__text">
                <h1>Login</h1>
                <p> Hello there , Login to start using WiSer !!</p>
            </div>
            <form>
                <input type="text"  name="email" value={user.email} placeholder="Enter email"  onChange={handleChange}  />
                <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} />
                <button type='submit' className='btn btn-danger'><Link  to="/Card">Login</Link>
                 </button>
                <p> Signup into <Link to="/Signup"  > WiSer</Link>  ecosystem</p> <br />
                <p> Forget password</p><p> Term and conditions</p>
                <Outlet/>   
            </form>
        </div>
    )
}
