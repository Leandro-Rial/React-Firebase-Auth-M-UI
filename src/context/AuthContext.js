import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    function firebaseSignUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function firebaseSignIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function firebaseSignOut() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={{
            currentUser,
            firebaseSignUp,
            firebaseSignIn,
            firebaseSignOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}