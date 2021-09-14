import * as React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function NotificationsScreen({ navigation }) {
  return (
    <LinearGradient colors={["#874179", "#33246E"]} style={{ width: "100%", height: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>

    </LinearGradient>

  );
}