import React, { useRef, useState } from 'react';
import { Alert, Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Draggable from 'react-native-draggable';

const size = 60;
const HappinessButton = () => {
    const { width, height } = Dimensions.get('window');
    const [ xValue, setXValue ] = useState(-width);
    const [ slide, setSlide ] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const xDistance = useRef(new Animated.Value(0)).current;

    const hideButton = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0, useNativeDriver: false,
                duration: 100
            }
        ).start();
    }

    const showButton = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1, useNativeDriver: false,
                duration: 500
            }
        ).start();
    }

    return (
        <Draggable x={ xValue } minY={ 0 } maxY={ 0 } y={ 0 } disabled={ slide } shouldReverse
                   onDragRelease={ (event => {
                       if ( event.nativeEvent.pageX > width / 1.5 ) {
                           setXValue(0);
                           setSlide(true);
                           hideButton();
                       }
                   }) }>
            <Animated.View style={{ width: width, height: height, backgroundColor: "#59e1ff"} }>
                <TouchableOpacity style={{
                    marginTop: 50,
                    backgroundColor: "#59e1ff",
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }} onPress={ () => {
                    setXValue(-width);
                    showButton();
                    setSlide(false);
                }
                }>
                    <Text>❌</Text>
                </TouchableOpacity>
                <Animated.View style={ [ styles.button, { opacity: fadeAnim } ] }>
                    <TouchableOpacity onPress={ () => Alert.alert("Hi") }>
                        <Text style={ styles.headerText }>😊</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </Draggable>

    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#59e1ff',
        width: size,
        height: size,
        borderRadius: size / 4,
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - 60,
        right: -50,
        zIndex: 100,
    },
    headerText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: "center",
    },
});

export default HappinessButton;
