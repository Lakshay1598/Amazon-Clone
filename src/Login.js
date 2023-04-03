import React, { useState } from 'react'
import './styles/login.css'
import { Link, useNavigate } from "react-router-dom"
import { auth } from './firebase'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = e=>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    navigate("/", { replace: true })
                }
            }).catch(error => alert(error.message))

    }

    const register = e=>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    navigate("/", { replace: true })
                }
            })
            .catch(error => alert(error.message))

    }


    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>
                    Sign In
                </h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

                    <button type='submit' onClick = {signIn} className='login_signIn'>
                        Sign In
                    </button>
                </form>

                <p>
                    By continuing, you agree to Amazon Clone's <a href="" >Conditions of Use</a> and <a href="" >Privacy Notice</a>.
                </p>

                <button onClick={register} className='login_signUp'>
                    Create a new Account
                </button>
            </div>

        </div>
    )
}

export default Login