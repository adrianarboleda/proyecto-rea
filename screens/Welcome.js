import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Avatar,
    WelcomeContainer,
    WelcomeImage,
} from './../components/styles';

const Welcome = () => {

    return(
        <>
            <StatusBar style= "light" />
            <InnerContainer>
                <WelcomeImage resizeMode ="cover" source = { require('./../assets/WelcomeImage.jpg')}/>
                <WelcomeContainer>
                    <PageTitle welcome = { true }> Bienvenido a Proyecto REA </PageTitle>
                    <SubTitle>Landing Page</SubTitle>

                    <StyledFormArea>
                        <Avatar resizeMode ="cover" source = { require('./../assets/Avatar.png')}/>

                        {/* Boton de Log In */}
                        <StyledButton onPress={ () => {} }>
                            <ButtonText>Cerrar Sesión</ButtonText>
                        </StyledButton>

                        <Line/>

                    </StyledFormArea> 
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}


export default Welcome;