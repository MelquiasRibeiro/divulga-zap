import React from 'react';
import { Feather, FontAwesome, EvilIcons } from '@expo/vector-icons';
import {
    Wrapper,
    ImageLogo,
    LoginContainer,
    Label,
    Input,
    LoginButton,
    TextButton,
    IconButton,
    AccountOptionsContainer,
    AccountOptions,
    SocialLoginLabel,
    SocialLoginButtonsContainer,
    SocialLoginButton,
} from './styles';

const Login = () => {
    return (
        <Wrapper>
            <ImageLogo source={require('../../assets/images/Logo.png')} />
            <LoginContainer>
                <Label>Email</Label>
                <Input />
                <Label>Senha</Label>
                <Input />
            </LoginContainer>
            <LoginButton>
                <TextButton>Entrar</TextButton>
                <IconButton>
                    <Feather name="arrow-right" color="#35C442" size={24} />
                </IconButton>
            </LoginButton>
            <AccountOptionsContainer>
                <AccountOptions>Ainda não tem conta?</AccountOptions>
                <AccountOptions>Esqueceu sua senha?</AccountOptions>
            </AccountOptionsContainer>
            <SocialLoginLabel>Entrar com: </SocialLoginLabel>
            <SocialLoginButtonsContainer>
                <SocialLoginButton>
                    <FontAwesome name="google" size={24} color="#35C442" />
                </SocialLoginButton>
                <SocialLoginButton>
                    <EvilIcons name="sc-facebook" size={32} color="#35C442" />
                </SocialLoginButton>
            </SocialLoginButtonsContainer>
        </Wrapper>
    );
};

export default Login;
