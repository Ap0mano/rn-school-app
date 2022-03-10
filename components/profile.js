import * as React from 'react';

import { TouchableOpacity, ScrollView, Text, View, StyleSheet, Dimensions, Image, Modal, Pressable } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { useAuth } from '../src/context'
import Svg, { Defs, Path, G } from "react-native-svg"


export default function ProfileScreen({ navigation }) {
  const { userData, handleLogout, schoolMap, changeScreen, currScreen, classLinks } = useAuth();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalURL, setModalURL] = React.useState(false);
  const [modalText, setModalText] = React.useState('');


  const [classIndex, setIndex] = React.useState(0)

  const windowWidth = Dimensions.get('window').width;
  let vbb = `-75 0 ${windowWidth + 1150} 670`

  const currClass = schoolMap?.[userData?.subjects[classIndex]?.split(":")[1].trim()]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#EDEDE2', height: "100%" }}>
      <View style={{ position: 'absolute', top: 23, left: 10, flexDirection: 'row', backgroundColor: '#EB0000', borderRadius: 20, width: 65, height: 25, alignItems: "center", paddingLeft: 2 }}>
        <View style={{ flexDirection: 'row' }}>
          <Svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512.006 512.006"
            style={{
              fill: "#FFF", width: 10, height: 10, margin: 3
            }}
            xmlSpace="preserve"
          >
            <G>
              <G>
                <Path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z" />
              </G>
            </G>
          </Svg>
          <TouchableOpacity
            onPress={handleLogout}
          >
            <Text style={{ color: '#FFF', fontFamily: "Poppins-Bold", fontSize: 10 }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles1.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles1.centeredView}>
            <View style={styles1.modalView}>
              <Pressable
                style={[styles1.button, styles1.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles1.textStyle}>Close</Text>
              </Pressable>
              <Text style={{}}>{modalText}</Text>


              <View style={{ elevation: 50 }}>
                <ReactNativeZoomableView
                  maxZoom={1.5}
                  minZoom={0.5}
                  zoomStep={0.5}
                  initialZoom={1}
                  style={{ alignItems: 'center' }}
                >
                  <Image
                    style={styles1.tinyLogo}
                    source={{
                      uri: modalURL,
                    }}
                  />
                </ReactNativeZoomableView>
              </View>
            </View>
          </View>
        </Modal>

      </View>

      <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30, marginTop: 30, height: "100%" }}>
        <Text style={{ fontSize: 30, top: -17, color: '#2D2D2D', fontFamily: "Poppins-Bold" }} >Schoolmap</Text>
        <View style={{ display: 'flex', flex: 1 }}>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 10, top: -10 }}>{userData.name} {userData.lastName}  </Text>
        </View>

        <View style={styles.box} elevation={5}>
          {
            userData.subjects.map((ele, index) => (
              <TouchableOpacity
                style={styles.button1}
                onPress={x => setIndex(index)} >
                <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={{ color: '#FFFFFF', fontFamily: "Poppins-Bold", left: 5 }}>{ele.split(':')[0]}.</Text>
                  <Text style={{ color: '#FFFFFF', fontFamily: "Poppins-Regular", left: 5 }}>{ele.split(':')[1]}</Text>
                  <Text style={{ color: '#FFFFFF', fontFamily: "Poppins-Bold", right: 5 }}>{ele.split(':')[2]}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', width: windowWidth
          }}>
          <Svg
            height="200px" width={windowWidth} viewBox={vbb} style={{ marginTop: 10 }}
          >
            <Defs></Defs>
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M179.57 2.18H1179.57V602.18H179.57z" />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5"
              d="M1358.14 755.42L1179.57 602.18 1179.57 2.18 1358.14 155.42 1358.14 755.42z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5"
              d="M1 755.42L179.57 602.18 179.57 2.18 1 155.42 1 755.42z"
            />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M178.95 152.18L1179.57 152.18" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M178.95 302.18L1179.57 302.18" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M179.57 453.8L1179.57 453.8" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M1179.57 152.18L1358.14 305.42" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M1179.57 302.18L1358.14 455.42" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M1179.57 453.8L1358.14 607.05" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M179.57 152.18L1 305.42" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M179.63 302.4L1.06 455.64" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)" strokeWidth="5" d="M179.76 452.01L1.19 605.26" />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={1 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M255.69 55H325.14V152.15H255.69z" onPress={() => alert(`Poschodie: 3, dvere: ${2}, učebňa ${findClass(schoolMap, 3, 1)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={2 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M411.35 55H480.8V152.15H411.35z" onPress={() => alert(`Poschodie: 3, dvere: ${3}, učebňa ${findClass(schoolMap, 3, 2)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={3 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M567.01 55.19H636.46V152.34H567.01z" onPress={() => alert(`Poschodie: 3, dvere: ${4}, učebňa ${findClass(schoolMap, 3, 3)}`)} />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={0 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => {
                setModalText(`${findClass(schoolMap, 3, 0)}`)
                setModalURL(classLinks[findClass1(schoolMap, 3, 0)])
                setModalVisible(true);
              }}
              d="M121.13 103.32L74.06 143.64 74.06 242.68 121.13 202.37 121.13 103.32z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={0 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => {
                setModalText(`${findClass(schoolMap, 2, 0)}`)
                setModalURL(classLinks[findClass1(schoolMap, 2, 0)])
                setModalVisible(true);
              }}
              d="M122.52 252.42L75.44 292.73 75.44 391.77 122.52 351.46 122.52 252.42z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={0 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => {
                setModalText(`${findClass(schoolMap, 1, 0)}`)
                setModalURL(classLinks[findClass(schoolMap, 1, 0)])
                setModalVisible(true);
              }}
              d="M121.68 402.84L74.61 443.16 74.61 542.2 121.68 501.88 121.68 402.84z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={0 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 0, dvere: ${1}, učebňa ${findClass(schoolMap, 0, 0)}`)}
              d="M121.99 552.58L74.92 592.9 74.92 691.94 121.99 651.62 121.99 552.58z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={7 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 3, dvere: ${1}, učebňa ${findClass(schoolMap, 3, 7)}`)}
              d="M1203.42 88.77L1243.17 122.82 1243.17 206.45 1203.42 172.41 1203.42 88.77z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={8 == currClass?.[3] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 3, dvere: ${9}, učebňa ${findClass(schoolMap, 3, 8)}`)}
              d="M1273.61 149.21L1313.35 183.25 1313.35 266.89 1273.61 232.84 1273.61 149.21z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={7 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 2, dvere: ${8}, učebňa ${findClass(schoolMap, 2, 7)}`)}
              d="M1203.42 238.77L1243.17 272.82 1243.17 356.45 1203.42 322.41 1203.42 238.77z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={8 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 2, dvere: ${9}, učebňa ${findClass(schoolMap, 2, 8)}`)}
              d="M1273.61 299.21L1313.35 333.25 1313.35 416.89 1273.61 382.84 1273.61 299.21z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={7 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 1, dvere: ${8}, učebňa ${findClass(schoolMap, 1, 7)}`)}
              d="M1203.42 390.2L1243.17 424.25 1243.17 507.88 1203.42 473.84 1203.42 390.2z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={8 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 1, dvere: ${9}, učebňa ${findClass(schoolMap, 1, 8)}`)}
              d="M1273.61 450.12L1313.35 484.16 1313.35 567.8 1273.61 533.75 1273.61 450.12z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={7 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 0, dvere: ${8}, učebňa ${findClass(schoolMap, 0, 7)}`)}
              d="M1203.42 538.77L1243.17 572.81 1243.17 656.45 1203.42 622.4 1203.42 538.77z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={8 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 0, dvere: ${9}, učebňa ${findClass(schoolMap, 0, 8)}`)}
              d="M1273.61 599.21L1313.35 633.25 1313.35 716.88 1273.61 682.84 1273.61 599.21z"
            />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={4 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M722.68 55H792.13V152.15H722.68z" onPress={() => alert(`Poschodie: 3, dvere: ${5}, učebňa ${findClass(schoolMap, 3, 4)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={6 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M1034 55.19H1103.45V152.34H1034z" onPress={() => alert(`Poschodie: 3, dvere: ${7}, učebňa ${findClass(schoolMap, 3, 6)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={5 == currClass?.[1] && 3 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M878.34 55H947.7900000000001V152.15H878.34z" onPress={() => alert(`Poschodie: 3, dvere: ${6}, učebňa ${findClass(schoolMap, 3, 5)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={1 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M255.69 204.83H325.14V301.98H255.69z" onPress={() => alert(`Poschodie: 2, dvere: ${2}, učebňa ${findClass(schoolMap, 2, 1)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={2 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M411.35 204.83H480.8V301.98H411.35z" onPress={() => alert(`Poschodie: 2, dvere: ${3}, učebňa ${findClass(schoolMap, 2, 2)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={3 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M567.01 205.02H636.46V302.17H567.01z" onPress={() => alert(`Poschodie: 2, dvere: ${4}, učebňa ${findClass(schoolMap, 2, 3)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={4 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M722.68 204.83H792.13V301.98H722.68z" onPress={() => alert(`Poschodie: 2, dvere: ${5}, učebňa ${findClass(schoolMap, 2, 4)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={6 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M1034 205.02H1103.45V302.17H1034z" onPress={() => alert(`Poschodie: 2, dvere: ${7}, učebňa ${findClass(schoolMap, 2, 6)}`)} />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={5 == currClass?.[1] && 2 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 2, dvere: ${6}, učebňa ${findClass(schoolMap, 2, 5)}`)}
              d="M878.34 204.83H947.7900000000001V301.98H878.34z"
            />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={1 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M255.38 356.45H324.83V453.6H255.38z" onPress={() => alert(`Poschodie: 1, dvere: ${2}, učebňa ${findClass(schoolMap, 1, 1)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={2 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M411.04 356.45H480.49V453.6H411.04z" onPress={() => alert(`Poschodie: 1, dvere: ${3}, učebňa ${findClass(schoolMap, 1, 2)}`)} />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={3 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 1, dvere: ${4}, učebňa ${findClass(schoolMap, 1, 3)}`)}
              d="M566.7 356.64H636.1500000000001V453.78999999999996H566.7z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={4 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 1, dvere: ${5}, učebňa ${findClass(schoolMap, 1, 4)}`)}
              d="M722.36 356.45H791.8100000000001V453.6H722.36z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={6 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 1, dvere: ${7}, učebňa ${findClass(schoolMap, 1, 6)}`)}
              d="M1033.69 356.64H1103.14V453.78999999999996H1033.69z"
            />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={5 == currClass?.[1] && 1 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M878.02 356.45H947.47V453.6H878.02z" onPress={() => alert(`Poschodie: 1, dvere: ${6}, učebňa ${findClass(schoolMap, 1, 5)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={1 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M255.38 504.83H324.83V601.98H255.38z" onPress={() => alert(`Poschodie: 0, dvere: ${2}, učebňa ${findClass(schoolMap, 0, 1)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={2 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M411.04 504.83H480.49V601.98H411.04z" onPress={() => alert(`Poschodie: 0, dvere: ${3}, učebňa ${findClass(schoolMap, 0, 2)}`)} />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={3 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 0, dvere: ${4}, učebňa ${findClass(schoolMap, 0, 3)}`)}
              d="M566.7 505.02H636.1500000000001V602.17H566.7z"
            />
            <Path
              className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={4 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"}
              onPress={() => alert(`Poschodie: 0, dvere: ${5}, učebňa ${findClass(schoolMap, 0, 4)}`)}
              d="M722.36 504.83H791.8100000000001V601.98H722.36z"
            />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={6 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M1033.69 505.02H1103.14V602.17H1033.69z" onPress={() => alert(`Poschodie: 0, dvere: ${7}, učebňa ${findClass(schoolMap, 0, 6)}`)} />
            <Path className="cls-1" stroke="rgb(93, 93, 93)"
              strokeWidth="5"
              fill={5 == currClass?.[1] && 0 == currClass?.[0] ? "rgb(93, 93, 93)" : "rgb(237, 237, 226)"} d="M878.02 504.83H947.47V601.98H878.02z" onPress={() => alert(`Poschodie: 0, dvere: ${6}, učebňa ${findClass(schoolMap, 0, 5)}`)} />
          </Svg>
        </ReactNativeZoomableView>
        <TouchableOpacity
          style={styles.button}
          onPress={changeScreen}
        >
          <Text style={{ color: '#FFF', fontFamily: "Poppins-Bold" }}>{currScreen == "profile" ? "Serach" : "Rozvrh"}</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
}






const styles1 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 200,
    justifyContent: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: '85%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    zIndex: 20,
    marginTop: 5,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  tinyLogo: {
    width: '90%',
    aspectRatio: 0.75,
    resizeMode: 'contain',
  },
});


const styles = StyleSheet.create({

  button1: {
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,

  },
  classButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    backgroundColor: '#2D2D2D',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    marginTop: 20,
    backgroundColor: '#2D2D2D',
    fontWeight: 'bold',
    fontSize: 15
  },
  box: {
    backgroundColor: "#2D2D2D",
    width: "70%",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 10, height: 20 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  }
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

function findClass1(obj, x1, x2) {
  let c_name = "";
  Object.keys(obj).forEach((ele, ind) => {
    if (x1 == obj[ele][0] && x2 == obj[ele][1]) {
      c_name = ele
    }
  })
  return c_name
}