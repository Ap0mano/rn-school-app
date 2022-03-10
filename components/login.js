import * as React from 'react';
import { useAuth } from '../src/context'
import { fetchApi } from '../src/fetch'

import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';



export default function Login({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const { loginProc, error } = useAuth();


    async function changePage(name, password) {
        loginProc(name, password)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDE2' }}>
                {/*<Image style={styles.loginImage} source={require('../src/img/schoolmap2.png')} />*/}
                <Text style={{  fontSize: 30, color: '#2D2D2D', fontFamily: "Poppins-Bold"}} >Schoolmap</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="prihlasovacie meno"
                    placeholderTextColor="#828282" 
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="heslo"
                    placeholderTextColor="#828282" 
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changePage(email, password)}
                >
                    <Text style={{ color: '#FFF', fontFamily: "Poppins-Bold" }}>Log In</Text>
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
        margin: 5,
        borderWidth: 2,
        width: "85%",
        borderRadius: 50,
        borderColor: '#2D2D2D',
        borderWidth: 3,
        paddingLeft: 20,
        color: "#3E3E3E",
        fontSize: 19, 
        fontFamily: "Poppins-Regular", 
        height: 55
    },
    button: {
        alignItems: "center",
        backgroundColor: "#2D2D2D",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        backgroundColor: '#2D2D2D',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15
    },
    eerror: {
        marginTop: 20, 
        fontSize: 20, 
        color: "red"
    },
    loginImage: {
        width: 80, 
        height: 80
    }

});


