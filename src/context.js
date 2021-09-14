import React, { useContext, useState, createContext, useEffect } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { getData, setData, removeData } from './storage'
const AuthContext = createContext(0);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [isSigned, changeSigned] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [userData, setUserData] = useState({});
    const [error, setError] = useState("");

    const handleLogout = async () => {
        await removeData("user") //remove "user" object from storage
        changeSigned(false) //change state to false (logged out)
    }

    async function loginProc(email, password) {
            try {
                const response = await fetch("https://api-test-xi.vercel.app/login", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: email,
                        password: password
                    })
                });
                const json = await response.json();
                if (json.success) {
                    await setData("account", { email: email, password: password }) // save data to "user" object
                    await setData("user", {name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID})
                    setUserData({name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID}) //set user data (state)
                    changeSigned(true) //change state to true (signed in)
                    return setError("")
                }
                setError("Incorrect name or password")
            } catch (error) {
                console.error(error);
            }

    }

    async function getInitAuth() {
        let userObj = await getData("user") //check storage for user data
        if (userObj) {
            changeSigned(true); //isSigned = true
            setUserData(userObj) //set user data from storage
        }
        setLoading(false) //disable loading
    }

    useEffect(() => {
        getInitAuth(); //on app load check user data + show splashscreen
    }, []);

    return (
        <AuthContext.Provider value={{ isSigned, isLoading, handleLogout, loginProc, userData, error }}>
            {children}
        </AuthContext.Provider>
    );
};