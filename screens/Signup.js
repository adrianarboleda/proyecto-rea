import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, TouchableOpacityBase } from 'react-native';

// formik: libreria para formularios.
import { Formik } from 'formik';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// Colors
import { Colors } from './../components/styles'

//DateTime Picker
import DateTimePicker from '@react-native-community/datetimepicker';


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


const Signup = () => {

    // Variables para manejar si la contraseña esta oculta o si se muestra
    const [hidePassword, setHidePassword] = useState(true);

    // Variables para manejar si el calendario esta oculto o si se muestra
    const [show, setShow] = useState(false);

    // Variables para guardar la fecha inicial para que funcione el calendario
    //El mes 0 se refiere a Enero
    const [date, setDate] = useState(new Date(2000,0,1));

    // Variables para guardar la fecha seleccionada por el usuario
    const [dob,setDob] = useState();

    // Funcion que actua cuando se cambia la fecha del calendario
    const onChange = (event, selectedDate) =>{
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    // Funcion para mostrar el calendario
    const showDatePicker = () =>{
        setShow(true)
    }

    return(
        <StyledContainer>
            <StatusBar style= "dark" />
            <InnerContainer>

                <PageTitle> Proyecto REA </PageTitle>
                <SubTitle>Account Sign Up</SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}

                <Formik
                    initialValues={ { fullName:'', dateOfBird:'',email: '', password: '', confirmPassword:'' } } //Valores iniciales en el Form
                    onSubmit={ (values) => { //acción al mandar el formulario
                        console.log(values);
                    }}
                >
                    { ({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                        <MyTextInput 
                            label="Nombre Completo"
                            icon="person"
                            placeholder="Adrian Arboleda"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('fullName') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('fullName') } //Accion onBlur
                            value={values.fullName} //Valor otorgado al campo
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="Correo Electrónico"
                            icon="mail"
                            placeholder="adrian@gmail.com"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('email') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('email') } //Accion onBlur
                            value={values.email} //Valor otorgado al campo
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="Fecha de nacimiento"
                            icon="calendar"
                            placeholder="YYYY - mm - dd"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('dateOfBird') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('dateOfBird') } //Accion onBlur
                            value={ dob ? dob.toDateString() : '' } //Valor otorgado al campo
                            isDate={ true }
                            editable ={ false }
                            showDatePicker = { showDatePicker }
                        />

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

                        <MyTextInput 
                            label="Confrima contraseña"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={ darkLight }
                            onChangeText={ handleChange('confirmPassword') } //Accion al cambiar el texto del campo
                            onBlur={ handleBlur('confirmPassword') } //Accion onBlur
                            value={ values.confirmPassword } //Valor otorgado al campo
                            secureTextEntry={ hidePassword }
                            isPassword={ true }
                            hidePassword={ hidePassword }
                            setHidePassword={ setHidePassword }
                        />
                        
                        <MsgBox>...</MsgBox>

                        <StyledButton onPress={ handleSubmit }>
                            <ButtonText>Crear cuenta</ButtonText>
                        </StyledButton>

                        <Line/>

                        <ExtraView>
                            <ExtraText>¿Ya tienes una cuenta? </ExtraText>
                            <TextLink>
                                <TextLinkContent> Inicia Sesión</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                        </StyledFormArea> 
                    }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, 
    isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name = {icon} size={30} color={brand}/>
            </LeftIcon>

            <StyledInputLabel>{label}</StyledInputLabel>

            {!isDate && <StyledTextInput { ...props } />}

            {isDate && (
                <TouchableOpacity onPress = { showDatePicker }>
                    <StyledTextInput { ...props } />
                </TouchableOpacity>
            )}

            { isPassword && (
                <RightIcon onPress= { () => setHidePassword(!hidePassword) }>
                    <Ionicons name={ hidePassword ? 'md-eye-off' : 'md-eye' } size={ 30 } color={ darkLight } />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;