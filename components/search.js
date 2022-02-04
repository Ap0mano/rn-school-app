import * as React from 'react';

import { TouchableOpacity, ScrollView, Text, FlatList, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { useAuth } from '../src/context'
import Svg, {
    Line,
    Rect,
} from 'react-native-svg';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item}</Text>
    </TouchableOpacity>
);


export default function SearchScreen({ navigation }) {
    const { userData, SearchClasses, schoolMap, changeScreen, currScreen } = useAuth();
    const [classIndex, setIndex] = React.useState(0)
    const [classesObj, setClassesObj] = React.useState(SearchClasses)

    const windowWidth = Dimensions.get('window').width;
    let vbb = `0 0 ${windowWidth} 200`
    let tempspace9 = (windowWidth - 100) / 9

    let _9 = []
    for (let i = 0; i < 9; i++) {
        _9.length > 0 ? _9.push([_9[i - 1][1] + 10, _9[i - 1][1] + 10 + tempspace9, i]) : _9.push([10, 10 + tempspace9, i])
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setIndex(getIndexByName(item, schoolMap))}>
                <Text style={[styles.title]}>{item}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#EDEDE2' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30, marginTop: 30 }}>
                {/* <Text>{userData.name} {userData.lastName}  classid: {userData.classID} </Text> */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#000"
                    onChangeText={e => setClassesObj(search(e, Object.keys(SearchClasses)))}

                />
                <View style={{ maxHeight: 200, minWidth: "100%", alignItems: "center" }}>
                    <ScrollView>
                        <FlatList
                            data={Object.keys(classesObj)}
                            renderItem={renderItem}
                        />
                    </ScrollView>
                </View>


                <ReactNativeZoomableView
                    maxZoom={1.5}
                    minZoom={0.5}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center', width: windowWidth, marginTop: "5%"
                    }}>
                    <Svg height="200px" width="100%" viewBox={vbb} style={{ marginTop: 10 }}>
                        <Rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            stroke="rgb(93, 93, 93)"
                            strokeWidth="5"
                            fill="rgb(237, 237, 226)"
                        />

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="50"
                                width={tempspace9}
                                height="-38"
                                stroke="rgb(93, 93, 93)"
                                strokeWidth="2"
                                fill={x[2] == classIndex?.[1] && 3 == classIndex?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
                                onPress={() => alert(`Poschodie: 3, dvere: ${x[2] + 1}, učebňa ${findClass(schoolMap, 3, x[2])}`)}
                            />
                        ))}
                        <Line x1="0" y1="50" x2={windowWidth} y2="50" stroke="rgb(93, 93, 93)" strokeWidth="2" />

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="100"
                                width={tempspace9}
                                height="-38"
                                stroke="rgb(93, 93, 93)"
                                strokeWidth="2"
                                fill={x[2] == classIndex?.[1] && 2 == classIndex?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
                                onPress={() => alert(`Poschodie: 2, dvere: ${x[2] + 1}, učebňa ${findClass(schoolMap, 2, x[2])}`)}

                            />
                        ))}

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="150"
                                width={tempspace9}
                                height="-38"
                                stroke="rgb(93, 93, 93)"
                                strokeWidth="2"
                                fill={x[2] == classIndex?.[1] && 1 == classIndex?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
                                onPress={() => alert(`Poschodie: 1, dvere: ${x[2] + 1}, učebňa ${findClass(schoolMap, 1, x[2])}`)}

                            />
                        ))}
                        <Line x1="0" y1="100" x2={windowWidth} y2="100" stroke="rgb(93, 93, 93)" strokeWidth="2" />

                        {_9.map((x) => (
                            <Rect
                                x={x[0]}
                                y="195"
                                width={tempspace9}
                                height="-38"
                                stroke="rgb(93, 93, 93)"
                                strokeWidth="2"
                                fill={x[2] == classIndex?.[1] && 0 == classIndex?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
                                onPress={() => {
                                    alert(`Poschodie: 0, dvere: ${x[2] + 1}, učebňa ${findClass(schoolMap, 0, x[2])}`)
                                }}

                            />
                        ))}
                        <Line x1="0" y1="150" x2={windowWidth} y2="150" stroke="rgb(93, 93, 93)" strokeWidth="2" />

                    </Svg>
                </ReactNativeZoomableView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={changeScreen}
                >
                    <Text style={{ color: '#EDEDE2' }}>{currScreen == "profile" ? "Serach" : "Rozvrh"}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}




const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        backgroundColor: '#5D5D5D',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    classButton: {
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
    input: {
        margin: 8,
        borderWidth: 1,
        width: "95%",
        borderRadius: 50,
        borderColor: '#707070',
        borderWidth: 2,
        paddingLeft: 20,
        color: "black",
        fontSize: 20
    },
    item: {
        padding: 5,
        marginVertical: 2,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});




function findClass(obj, x1, x2) {
    let c_name = "";
    Object.keys(obj).forEach((ele, ind) => {
        if (x1 == obj[ele][0] && x2 == obj[ele][1]) {
            c_name = obj[ele][2]
        }
    })
    return c_name
}


function search(trieda, allTriedy) {
    let found = {}
    for (let i in allTriedy) {
        if (allTriedy[i].toLocaleLowerCase().includes(trieda.toLocaleLowerCase())) {
            found[allTriedy[i]] = [i]
        }
    }
    return found
}


function getIndexByName(trieda, allTriedy) {
    for (let i in allTriedy) {
        if (trieda == allTriedy[i][2]) return allTriedy[i]
    }
}