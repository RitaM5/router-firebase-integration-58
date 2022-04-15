import { getAuth } from '@firebase/auth';
import React from 'react';
//import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import app from '../../firebase-init';
const auth = getAuth(app);

const Login = () => {
    //const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location?.state?.from?.pathname || '/';

    const handleGoogleSihnIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, {replace:true})
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={handleGoogleSihnIn}>Google Sign In</button>
            </div>
            <form>
                <input type="text" placeholder="your name"></input>
                <br />
                <input type="email" placeholder="your email"></input>
                <br />
                <input type="password" placeholder="your password"></input>
                <br />
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};

export default Login;