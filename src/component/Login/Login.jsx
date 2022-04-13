import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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