import React,{useEffect, useState} from 'react';
import { Feather, FontAwesome, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {ActivityIndicator, Text} from "react-native";
import "firebase/firestore";
import firebase from "firebase";

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
    AccountOptionsText,
    SocialLoginLabel,
    SocialLoginButtonsContainer,
    SocialLoginButton,
    ErrorMessageContainer,
    ErrorMessage,
} from './styles';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigation = useNavigation();

    async function handleLogin() {
      setError(false)
      setLoading(true)
      await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(handleNavigateToList)
      .catch(error => {
        setLoading(false)
        setError(true)
      });
    }
    function handleNavigateToRegister() {
        navigation.navigate('Register');
    }
    function handleNavigateToForgotPassword() {
        navigation.navigate('ForgotPassword');
    }
    function handleNavigateToList(){
        setLoading(false)
        navigation.navigate('List');
    }

    return (
        <Wrapper>
            <ImageLogo source={require('../../assets/images/Logo.png')} />
            <LoginContainer>
                <Label>Email</Label>
                <Input  onChangeText={(Email) =>
                            setEmail(Email)
                        } />
                <Label>Senha</Label>
                <Input onChangeText={(Password) =>
                            setPassword(Password)
                        }/>
            </LoginContainer>
            <LoginButton loading={loading}
                onPress={handleLogin}>
                <TextButton>Entrar</TextButton>
                <IconButton>
                    {
                    loading ? <ActivityIndicator size={24} color="#35C442"/> :
                    <Feather name="arrow-right" color="#35C442" size={24} />
                    }
                </IconButton>
            </LoginButton>
            {
            error? 
            <ErrorMessageContainer>
            <ErrorMessage>Email ou senha incorreta</ErrorMessage>
            </ErrorMessageContainer>
             : null
            }
            <SocialLoginLabel>Entrar com: </SocialLoginLabel>
            <SocialLoginButtonsContainer>
                <SocialLoginButton>
                    <FontAwesome name="google" size={24} color="#35C442" />
                </SocialLoginButton>
                <SocialLoginButton>
                    <EvilIcons name="sc-facebook" size={32} color="#35C442" />
                </SocialLoginButton>
            </SocialLoginButtonsContainer>
            <AccountOptionsContainer>
                <AccountOptions onPress={handleNavigateToRegister}>
                    <AccountOptionsText>
                        Ainda não tem conta? |
                    </AccountOptionsText>
                </AccountOptions>
                <AccountOptions onPress={handleNavigateToForgotPassword}>
                    <AccountOptionsText>
                        {' '}
                        Esqueceu sua senha?
                    </AccountOptionsText>
                </AccountOptions>
            </AccountOptionsContainer>
        </Wrapper>
    );
};

export default Login;
