import { getAuth } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase-init';
//import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)
const Home = () => {
    //const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>this is home</h2>
            <span>{user ? user.displayName : 'no body'}</span>
        </div>
    );
};

export default Home;