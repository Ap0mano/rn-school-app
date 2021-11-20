import * as React from 'react';
import { useAuth } from '../src/context'
import { fetchApi } from '../src/fetch'

import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';



import LinearGradient from 'react-native-linear-gradient';


export default function Login({ navigation }) {
    const [email, setEmail] = React.useState("PeterBalaz")
    const [password, setPassword] = React.useState("030727/4957")
    const { loginProc, error } = useAuth();


    async function changePage(name, password) {
        loginProc(name, password)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDE2' }}>
                <Text style={styles.padding}>Schoolmap</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="prihlasovacie meno"
                    placeholderTextColor="#000" 
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="heslo"
                    placeholderTextColor="#000" 
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changePage(email, password)}
                >
                    <Text style={{ color: '#EDEDE2' }}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.eerror}>{error}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    padding: {
        paddingBottom: 25,
        fontSize: 20,
        color: '#5D5D5D',
        fontWeight: 'bold',
        fontSize: 30
    },
    input: {
        margin: 8,
        borderWidth: 1,
        width: "75%",
        borderRadius: 50,
        borderColor: '#707070',
        borderWidth: 2,
        paddingLeft: 20,
        color: "black"

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        backgroundColor: '#5D5D5D',
        marginTop: 20, 
        fontWeight: 'bold',
        fontSize: 15
    },
    eerror: {
        marginTop: 20, 
        fontSize: 20, 
        color: "red"
    }

});


