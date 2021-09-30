import { NativeAppEventEmitter } from "react-native";
import React from react;
import { AppLoading } from 'expo';
import {Container,Header,Item,Input,Footer,Content,Form, Button, View, Text} from react-NativeAppEventEmitter;
import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isReady:false,
        };
    }

    async componentDidMount(){
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render(){
        
    }
}