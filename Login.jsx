import { Link, Navigate } from "react-router-dom"
import axiosClient from "../axios-client";
import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({__html: ''});

    const {setuser, setToken} = useStateContext(); 

    
    const onSubmit = (ev) => {
        ev.preventDefault()
        setError({ __html: ''});

        axiosClient.post('/login', { 
            email,
            password,
        })
          .then(({data}) => {
             setUser(data.user);
             setToken(data.token);
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              const errors = Object.values(error.response.data).reduce((accum, next) => [...accum],[...next] )
              setError({__html: errors.join('<br>')})
            }
            console.error(error);
          })
        }

    return (
        <form onSubmit={onSubmit}>
            <header>
                <div className="container">
                    <img src="tunisie-telecom-logo.png" width={200} height={100} position="center" />
                </div>
            </header>
            <h1 className="title">
                Login into your account
            </h1>
            {error.__html && (<div dangerouslySetInnerHTML={error}></div>)}
            <input value={email} onChange={ev => setEmail(ev.target.value)} id="email" name="email" type="email" placeholder="email" required/>
            <input value={password} onChange={ev => setPassword(ev.target.value)} id="password" name="password" type="password" placeholder="Password Address"/>
            <button className="btn btn-block">Login</button>
            <div className="sparatorVertical"></div>
            <p className="message">
               Forgot password?  
            </p>
            <br/>
            <p className="message">
                Not Registered? <Link to="/signup">Create an account</Link>
            </p>
        </form>
    )
}