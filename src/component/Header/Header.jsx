import React from 'react';
import { Link } from 'react-router-dom';
//import useFirebase from '../../hooks/useFirebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import './Header.css';
import { getAuth, signOut  } from '@firebase/auth';
import app from '../../firebase-init';

const auth = getAuth(app)

const Header = () => {
    //const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/produtcs">Produtcs</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/register">Register</Link>
            <span>{user ? user.displayName : 'no body'}</span>
            {
                user?.uid
                    ?
                    <button onClick={() => signOut(auth)}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>
            }
        </div>
    );
};

export default Header;