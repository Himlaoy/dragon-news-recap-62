import React, { createContext } from 'react';
import { getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext  = createContext(null)

const auth = getAuth(app)

const AuthProvide = ({children}) => {

    const user = null

    const userInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;