import * as React from 'react';
import { Button, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { useAuth } from '../src/context'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';


export default function ProfileScreen({ navigation }) {
    const { userData, handleLogout, schoolMap } = useAuth();
    const windowWidth = Dimensions.get('window').width;
    let vbb = `0 0 ${windowWidth} 200`
    // console.log(userData.subjects[3].split(":")[1].trim())
    let _8 = []
    let tempspace8 = (windowWidth - 90) / 8
    let tempspace9 = (windowWidth - 100) / 9



    for (let i = 0; i < 8; i++) {
        _8.length > 0 ? _8.push([_8[i - 1][1] + 10, _8[i - 1][1] + 10 + tempspace9, i]) : _8.push([10, 10 + tempspace9, i])
    }
    let _9 = []
    for (let i = 0; i < 9; i++) {
        _9.length > 0 ? _9.push([_9[i - 1][1] + 10, _9[i - 1][1] + 10 + tempspace9, i]) : _9.push([10, 10 + tempspace9, i])
    }
    const currClass = [1,4] //schoolMap[userData.subjects[3].split(":")[1].trim()]
    console.log(currClass)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#EDEDE2' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 30, paddingTop: 30 }}>
                <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
                <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
                <ReactNativeZoomableView
                    maxZoom={1.5}
                    minZoom={0.5}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center', width: windowWidth
                    }}>
                    <Svg height="200px" width="100%" viewBox={vbb}>
                        <Rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            stroke="red"
                            strokeWidth="10"
                            fill="yellow"
                        />

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="50"
                                width={tempspace9}
                                height="-38"
                                stroke="red"
                                strokeWidth="1"
                                fill={x[2] == currClass[1] && 3 == currClass[0] ? "green" : "blue"}
                                onPress={() => alert(`Poschodie: 3, dvere: ${x[2]+1}, ucebna aoao`)}


                            />
                        ))}
                        <Line x1="0" y1="50" x2={windowWidth} y2="50" stroke="red" strokeWidth="2" />
                        
                        {_8.map((x) => (
                            <Rect
                                x={x[0]}
                                y="100"
                                width={tempspace9}
                                height="-38"
                                stroke="red"
                                strokeWidth="1"
                                fill={x[2] == currClass[1] && 2 == currClass[0] ? "green" : "blue"}
                                onPress={() => alert(`Poschodie: 2, dvere: ${x[2]+1}, ucebna aoao`)}

                            />
                        ))}

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="150"
                                width={tempspace9}
                                height="-38"
                                stroke="red"
                                strokeWidth="1"
                                fill={x[2] == currClass[1] && 1 == currClass[0] ? "green" : "blue"}
                                onPress={() => alert(`Poschodie: 1, dvere: ${x[2]+1}, ucebna aoao`)}

                            />
                        ))}
                        <Line x1="0" y1="100" x2={windowWidth} y2="100" stroke="red" strokeWidth="2" />

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="195"
                                width={tempspace9}
                                height="-38"
                                stroke="red"
                                strokeWidth="1"
                                fill={x[2] == currClass[1] && 0 == currClass[0] ? "green" : "blue"}
                                onPress={() => alert(`Poschodie: 0, dvere: ${x[2]+1}, ucebna aoao`)}

                            />
                        ))}
                        <Line x1="0" y1="150" x2={windowWidth} y2="150" stroke="red" strokeWidth="2" />

                    </Svg>
                </ReactNativeZoomableView>

                <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
                <Button title="logout" onPress={handleLogout} />
            </View>
        </ScrollView>
        // <ScrollView contentContainerStyle={styles.contentContainer} >
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>
        //     <Text>{userData.name} {userData.lastName}  classid: {userData.classID}  {"\n"}rozvrh: {"\n"}{userData.subjects.join("\n")}</Text>

        //     <Button title="logout" onPress={handleLogout} />
        // </ScrollView>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1, flexGrow: 1, alignItems: 'center', backgroundColor: '#EDEDE2'
    }
});



/*
 <Svg height="100%" width="100%" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="0"
                    y="0"
                    width="100%"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>

*/