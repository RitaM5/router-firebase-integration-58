import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase-init.js";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        //console.log('signing in soon');
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    //return [user, setUser];
    return {
        user,
        setUser,
        signInWithGoogle,
        handleSignOut
    }
};

export default useFirebase;