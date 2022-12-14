import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);

    }
    useEffect( () =>{
       const unsubscribe =  onAuthStateChanged(auth, curentUser => {
            console.log('user observing');
            setUser(curentUser);
        });
        return () => unsubscribe();
    },[])
    const authInfo = {
        createUser,
        signIn,
        logOut,
        user

    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;