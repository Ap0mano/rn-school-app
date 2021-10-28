import * as React from 'react';
import { Button, KeyboardAvoidingView, Text } from 'react-native';
import { useAuth } from '../src/context'
import LinearGradient from 'react-native-linear-gradient';


export default function ProfileScreen({ navigation }) {
    const { userData, handleLogout } = useAuth();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <LinearGradient colors={["#874179", "#33246E"]} style={{ width: "100%", height: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  rozvrh: {userData.subjects}</Text>
                <Button title="logout" onPress={handleLogout} />
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}
