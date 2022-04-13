import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form>
                <input type="text" placeholder="your name"></input>
                <br />
                <input type="email" placeholder="your email"></input>
                <br />
                <input type="password" placeholder="your password"></input>
                <br />
                <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Register;