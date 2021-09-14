import * as React from 'react';
import { useAuth } from '../src/context'
import { fetchApi } from '../src/fetch'

import { TextInput, TouchableOpacity, KeyboardAvoidingView, Text, StyleSheet } from 'react-native';



import LinearGradient from 'react-native-linear-gradient';


export default function Login({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const { loginProc, error } = useAuth();


    async function changePage(name, password) {
        loginProc(name, password)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <LinearGradient colors={["#874179", "#33246E"]} style={{width: "100%", height: "100%", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.padding}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="prihlasovacie meno"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="heslo"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changePage(email, password)}
                >
                    <Text style={{ color: '#2c0735' }}>Press Here</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 20, fontSize: 20, color: "red" }}>{error}</Text>
            </LinearGradient>
        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({
    padding: {
        paddingBottom: 10,
        fontSize: 20,
        color: '#2c0735'
    },
    input: {
        margin: 12,
        borderWidth: 1,
        width: "75%"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },

});


