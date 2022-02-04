import React, { useContext, useState, createContext, useEffect } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { getData, setData, removeData } from './storage'
const AuthContext = createContext(0);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [isSigned, changeSigned] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [currScreen, setCurrScreen] = useState("profile")
    const [userData, setUserData] = useState({});
    const [error, setError] = useState("");
    const SearchClasses = { "Nemecký jazyk 0": [0, 0, "Nemecký jazyk 0"], "Zástupkyňa": [0, 1, "Zástupkyňa"], "Psychologička": [0, 2, "Psychologička"], "Anglický jazyk 0": [0, 3, "Anglický jazyk 0"], "Riaditeľka": [0, 4, "Riaditeľka"], "Sekretariát": [0, 5, "Sekretariát"], "Zborovňa": [0, 6, "Zborovňa"], "Anglický jazyk 1": [0, 7, "Anglický jazyk 1"], "Anglický jazyk 2": [0, 8, "Anglický jazyk 2"], "Fyzika 1": [1, 0, "Fyzika 1"], "Fyzika 1": [1, 0, "Fyzika 1"], "Kabinet Che/Bio": [1, 1, "Kabinet Che/Bio"], "Kabinet Anj": [1, 2, "Kabinet Anj"], "Biológia 1": [1, 3, "Biológia 1"], "Biológia 2": [1, 4, "Biológia 2"], "GEG": [1, 5, "Geografia"], "MAT1": [1, 6, "Matematika 1"], "IKT": [1, 7, "IKT"], "Dejepis": [1, 8, "Dejepis"], "Chémia 1": [2, 0, "Chémia 1"], "Informatika 1": [2, 1, "Informatika 1"], "Informatika 1": [2, 2, "Informatika 1"], "Video": [2, 3, "Video"], "Chémia 2": [2, 4, "Chémia 2"], "Matematika 2": [2, 5, "Matematika 2"], "Nemecký jazyk 2": [2, 6, "Nemecký jazyk 2"], "Slovenský jazyk 2": [2, 7, "Slovenský jazyk 2"], "Slovenský jazyk 1": [2, 8, "Slovenský jazyk 1"], "Malá telocvičňa": [3, 0, "Malá telocvičňa"], "Informatika 2": [3, 1, "Informatika 2"], "Anglický jazyk 3": [3, 2, "Anglický jazyk 3"], "Učebňa ruštiny": [3, 3, "Učebňa ruštiny"], "Nemecký jazyk 3": [3, 4, "Nemecký jazyk 3"], "Sekunda": [3, 5, "Sekunda"], "Príma": [3, 6, "Príma"], "Kvarta": [3, 7, "Kvarta"], "Tercia": [3, 8, "Tercia"] }
    const schoolMap = { "NEJ0": [0, 0, "Nemecký jazyk 0"], "ZÁSTUP": [0, 1, "Zástupkyňa"], "PSYCH": [0, 2, "Psychologička"], "ANJ0": [0, 3, "Anglický jazyk 0"], "RIAD": [0, 4, "Riaditeľka"], "SEK": [0, 5, "Sekretariát"], "ZBOR": [0, 6, "Zborovňa"], "ANJ1": [0, 7, "Anglický jazyk 1"], "ANJ2": [0, 8, "Anglický jazyk 2"], "FYZ1": [1, 0, "Fyzika 1"], "FYZ2": [1, 0, "Fyzika 1"], "KCHE/KBIO": [1, 1, "Kabinet Che/Bio"], "KANJ": [1, 2, "Kabinet Anj"], "BIO1": [1, 3, "Biológia 1"], "BIO2": [1, 4, "Biológia 2"], "GEG": [1, 5, "Geografia"], "MAT1": [1, 6, "Matematika 1"], "IKT": [1, 7, "IKT"], "DEJ": [1, 8, "Dejepis"], "CHE1": [2, 0, "Chémia 1"], "INF1": [2, 1, "Informatika 1"], "INF1": [2, 2, "Informatika 1"], "VID": [2, 3, "Video"], "CHE2": [2, 4, "Chémia 2"], "MAT2": [2, 5, "Matematika 2"], "NEJ2": [2, 6, "Nemecký jazyk 2"], "SJL2": [2, 7, "Slovenský jazyk 2"], "SJL1": [2, 8, "Slovenský jazyk 1"], "MTV": [3, 0, "Malá telocvičňa"], "INF2": [3, 1, "Informatika 2"], "ANJ3": [3, 2, "Anglický jazyk 3"], "RUJ": [3, 3, "Učebňa ruštiny"], "NEJ3": [3, 4, "Nemecký jazyk 3"], "S": [3, 5, "Sekunda"], "P": [3, 6, "Príma"], "K": [3, 7, "Kvarta"], "T": [3, 8, "Tercia"] }
    const handleLogout = async () => {
        await removeData("user") //remove "user" object from storage
        changeSigned(false) //change state to false (logged out)
    }

    const changeScreen = async () => {
        currScreen == "profile" ? setCurrScreen("search") : setCurrScreen("profile")
        // await removeData("user") //remove "user" object from storage
        // changeSigned(false) //change state to false (logged out)
    }

    // {"NEJ0": [0, 0,"Nermecký jazyk 0"],"ZÁSTUP": [0, 1, "Zástupkyňa"],"PSYCH": [0, 2, "Psychologička"],"ANJ0": [0, 3,"Anglický jazyk 0"],"RIAD": [0, 4, "Riaditeľka"],"SEK": [0, 5, "Sekretariát"],"ZBOR": [0, 6,"Zborovňa"],"ANJ1": [0, 7,"Anglický jazyk 1"],"ANJ2": [0, 8,"Anglický jazyk 2"],"FYZ1": [1, 0,"Fyzika 1"],"FYZ2": [1, 0,"Fyzika 1"]        ,"KCHE/KBIO":[1,1,"Kabinet Che/Bio"],"KANJ": [1, 2,"Kabinet Anj"],"BIO1": [1, 3,"Biológia 1"],"BIO2":[1, 4,"Biológia 2"],"GEG":[1, 5,"Geografia"],"MAT1":[1, 6,"Matematika 1"],"IKT":[1, 7,"IKT"],"DEJ":[1, 8,"Dejepis"],"CHE1":[2, 0,"Chémia 1"] ,"INF1":[2, 1,"Informatika 1"]  ,"INF1":[2, 2,"Informatika 1"],"VID":[2, 3,"Video"],"CHE2":[2, 4,"Chémia 2"],"MAT2":[2, 5,"Matematika 2"],"NEJ2":[2, 6,"Nemecký jazyk 2"],"SJL2":[2, 7,"Slovenský jazyk 2"],"SJL1":[2, 8,"Slovenský jazyk 1"],"MTV":[3, 0,"Malá telocvičňa"],"INF2":[3, 1,"Informatika 2"],"ANJ3":[3, 2,"Anglický jazyk 3"],"RUJ":[3, 3,"Učebňa ruštiny"],"NEJ3":[3, 4,"Nemecký jazyk 3"],"S":[3, 5,"Sekunda"],"P":[3, 6,"Príma"],"K":[3, 7,"Kvarta"],"T":[3, 8,"Tercia"]}

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
                await setData("user", { name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID, subjects: json.data.subjects })
                setUserData({ name: json.data.name, lastName: json.data.lastName, classID: json.data.triedaID, subjects: json.data.subjects }) //set user data (state)
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

    useEffect(async () => {
        getInitAuth(); //on app load check user data + show splashscreen
        let accountObj = await getData("account") //check storage for login data
        if (accountObj) {
            loginProc(accountObj.email, accountObj.password)
        }

    }, []);

    return (
        <AuthContext.Provider value={{ isSigned, isLoading, handleLogout, loginProc, userData, error, schoolMap, currScreen, changeScreen, SearchClasses }}>
            {children}
        </AuthContext.Provider>
    );
};