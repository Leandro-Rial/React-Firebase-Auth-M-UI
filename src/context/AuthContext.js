import React, { useState, createContext, useReducer } from "react";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { types } from "../types/types";
import { todoReducer } from "./TodoReducer";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem('todos'))
        : [],
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {

    // Firebase

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

    // Todos

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({
            type: types.addTodo,
            payload: {...todo, id: uuidv4()}
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: types.removeTodo,
            payload: id
        })
    }

    const editTodo = (todo) => {
        dispatch({
            type: types.editTodo,
            payload: todo
        })
    }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state.todos))

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe;
    }, [state])

    return (
        <AuthContext.Provider value={{
            currentUser,
            firebaseSignUp,
            firebaseSignIn,
            firebaseSignOut,
            todos: state.todos,
            addTodo,
            deleteTodo,
            editTodo
        }}>
            { children }
        </AuthContext.Provider>
    )
}