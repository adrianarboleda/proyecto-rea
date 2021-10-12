import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// formik: libreria para formularios.
import { Formik } from 'formik';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// Colors
import { Colors } from './../components/styles'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    RightIcon,
    MsgBox,
    Line,
    ExtraView,
    TextLink,
    ExtraText,
    TextLinkContent,
} from './../components/styles';

const { brand , darkLight, primary} = Colors;


const Login = () => {

    // Variables para manejar si la contraseña esta oculta o si se muestra
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style= "dark" />
            <InnerContainer>

                <PageLogo resizeMode ="cover" source = { require('./../assets/PageLogo.jpg')}/>
                <PageTitle> Proyecto REA </PageTitle>
                <SubTitle>Account Login</SubTitle>

                {/* Formulario utilizando libreria Formik*/}
                <Formik
                    initialValues={ { email: '', password: '' } } //Valores iniciales en el Form
                    onSubmit={ (values) => { //acción al mandar el formulario
                        console.log(values);
                    }}
                >
                    { ({ handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledFormArea>

                        {/* Area de Email */}
                        <MyTextInput 
                            label="Correo electrónico"
                            icon="mail"
                            placeholder="adrian@gmail.com"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('email') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('email') } //Accion onBlur
                            value={values.email} //Valor otorgado al campo
                            keyboardType="email-address"
                        />

                        {/* Area de Password */}
                        <MyTextInput 
                            label="Contraseña"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('password') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('password') } //Accion onBlur
                            value={ values.password } //Valor otorgado al campo
                            secureTextEntry={ hidePassword }
                            isPassword={ true }
                            hidePassword={ hidePassword }
                            setHidePassword={ setHidePassword }
                        />
                        
                        <MsgBox>...</MsgBox>

                        {/* Boton de Log In */}
                        <StyledButton onPress={ handleSubmit }>
                            <ButtonText>Acceder</ButtonText>
                        </StyledButton>

                        <Line/>

                        {/* Log in with google */}
                        <StyledButton google={ true } onPress={ handleSubmit }>
                            <Fontisto name="google" color={ primary } size={ 25 } />
                            <ButtonText google={ true }>Inicia sesión con Google</ButtonText>
                        </StyledButton>

                        {/* Módula para crear una nueva cuenta */}
                        <ExtraView>
                            <ExtraText>¿No tienes una cuenta? </ExtraText>
                            <TextLink>
                                <TextLinkContent> Crea una cuenta</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                        </StyledFormArea> 
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

//Funcion que maneja unicamente el campo de contraseña.
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name = {icon} size={30} color={brand}/>
            </LeftIcon>

            <StyledInputLabel>{label}</StyledInputLabel>

            <StyledTextInput {...props}/>
            { isPassword && (
                <RightIcon onPress= { () => setHidePassword(!hidePassword) }>
                    <Ionicons name={ hidePassword ? 'md-eye-off' : 'md-eye' } size={ 30 } color={ darkLight } />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;