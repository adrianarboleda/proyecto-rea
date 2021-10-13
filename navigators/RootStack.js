//Este archivo, así como el folder, se ocupan del stacking de vistas, lo que las 
//hace más fáciles de navegar entre si
//Más información en: https://reactnavigation.org/docs/hello-react-navigation/
import React from 'react';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from '../components/styles';
const { primary, tertiary } = Colors;

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions ={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainer: {
                        paddingLeft: 20
                    },
                }}                
                initialRouterName="Login"//Ruta inicial al abrir la aplicación
            >
                <Stack.Screen name = "Login" component={ Login }/>
                <Stack.Screen name = "Sign Up" component={ Signup }/>
                <Stack.Screen options={{ headerTintColor: primary}} name = "Welcome" component={ Welcome }/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default RootStack;