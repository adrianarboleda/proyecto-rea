//Elemento para evitar que el teclado cubra los campos a llenar

import React from 'react';

import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'


const KeyboardAvoidWrapper = ({ children }) => {
    return(
        <KeyboardAvoidingView style = { { flex: 1} }>
            <ScrollView>
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    {/* Todos los hijos (otros componentes) deben ir dentro del Wrapper */}
                    { children }
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidWrapper;