import { getAuth } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router';
import app from '../../firebase-init';

const auth = getAuth(app);
const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
