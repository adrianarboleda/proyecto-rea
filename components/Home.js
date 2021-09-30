import { NativeAppEventEmitter } from "react-native";
import React,{ Component } from react;
import {Button, View, Text} from react-NativeAppEventEmitter;
import {createStackNavigator, createAppContainer} from react-navigation;

export default class Aboutscreen extends Component{
    render(){
        return(
            <View>
                <Text>Si ya estás registrado, haga click en LOGIN</Text>

                <Button 
                    onPress={
                        () => this.props.navigation.navigate('Login')
                    }
                    title = "Login"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}