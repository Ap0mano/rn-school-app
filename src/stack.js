import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/login'
import Loading from '../components/loading'
import Profile from '../components/profile'
import Search from '../components/search'
import * as React from 'react';
import { useAuth } from './context'


const Stack = createStackNavigator();

export default function AppStack() {
    const { isSigned, isLoading, currScreen } = useAuth();

    if (isLoading) return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Loading" component={Loading} />
        </Stack.Navigator>
    )

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {isSigned ?
                currScreen == "profile" ?
                    <Stack.Screen name="Profile" component={Profile} />
                    :
                    <Stack.Screen name="Search" component={Search} />
                :
                <Stack.Screen name="Login" component={Login} />
            }
        </Stack.Navigator>
    );
}
