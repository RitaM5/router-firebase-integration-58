import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
auth

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        //console.log('signing in soon');
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }
    //return [user, setUser];
    return{
        user, 
        setUser, 
        signInWithGoogle}
};

export default useFirebase;