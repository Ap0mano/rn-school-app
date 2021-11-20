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
    const [schoolMap, setMap] = useState({"NEJ0": [0, 0],"ZÁSTUPKIŇA": [0, 1],"PSYCHOLOGIČKA": [0, 2],"ANJ0": [0, 3],"RIADITEĽŇA": [0, 4],"SEKRETARIÁT": [0, 5],"ZBOROVŇA": [0, 6],"ANJ1": [0, 7],"ANJ2": [0, 8],"FYZ+LAB": [1, 0],"KABINET CHE/BIO": [1, 1],"KABINET ANJ": [1, 2],"BIO+LAB": [1, 3],"BIO2":[1, 4],"GEO":[1, 5],"MAT1":[1, 6],"IKT":[1, 7],"DEJ":[1, 8],"CHE LAB":[2, 0],"VIDEO":[2, 1],"CHE2":[2, 2],"MAT2":[2, 3],"NEJ2":[2, 4],"SJL2":[2, 5],"SJL1":[2, 6],"SJL":[2, 7],"MALÁ TELOCVIČŇA":[3, 0],"INF2":[3, 1],"ANJ3":[3, 2],"RUJ/FRA":[3, 3],"NEJ3":[3, 4],"SEKUNDA":[3, 5],"PRIMA":[3, 6],"KVARTA":[3, 7],"TERCIA":[3, 8]})

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
                    await setData("user", {name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID, subjects: json.data.subjects})
                    setUserData({name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID, subjects: json.data.subjects}) //set user data (state)
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
        <AuthContext.Provider value={{ isSigned, isLoading, handleLogout, loginProc, userData, error, schoolMap }}>
            {children}
        </AuthContext.Provider>
    );
};