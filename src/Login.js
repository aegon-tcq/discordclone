import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((e) => alert(e.message))

    }



    return (
        <div className='login' >
           <div className='login__logo' >
            <img  src='https://www.flaticon.com/svg/static/icons/svg/2111/2111370.svg' alt='Logo'/>
           </div>
           <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
