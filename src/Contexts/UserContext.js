import React, { createContext, useState } from 'react';
import app from '../Config/firebase.config';
import {getAuth} from 'firebase/auth'

const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;