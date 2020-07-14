import React, { useEffect, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Wrapper,
    ImageLogo,
    BackButton,
    BackButtonText,
    UserData,
    LoginContainer,
    Label,
    Input,
    LoginButton,
    TextButton,
    IconButton,
} from './styles';

const SecondStep = ({ route }) => {
    const [typeUser, setTypeUser] = useState();

    const navigation = useNavigation();

    const user = route.params.advertiser;

    useEffect(() => {
        setTypeUser(user);
    }, []);

    function handleNavigateToBack() {
        navigation.navigate('Register');
    }
    function handleNavigateToSucess() {
        navigation.navigate('Successfully');
    }
    function handleNavigateToNext() {
        navigation.navigate('Register3');
    }

    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <BackButton onPress={handleNavigateToBack}>
                <Feather name="arrow-left" color="#35C442" size={24} />
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>
            <UserData>Seus dados: </UserData>
            <LoginContainer>
                <Label>Nome</Label>
                <Input />
                <Label>Email</Label>
                <Input />
                <Label>Senha</Label>
                <Input />
                <Label>Confirmação de Senha</Label>
                <Input />
            </LoginContainer>
            {typeUser ? (
                <LoginButton onPress={handleNavigateToNext}>
                    <TextButton>Avançar</TextButton>
                    <IconButton>
                        <Feather name="arrow-right" color="#35C442" size={24} />
                    </IconButton>
                </LoginButton>
            ) : (
                <LoginButton onPress={handleNavigateToSucess}>
                    <TextButton>Registrar</TextButton>
                    <IconButton>
                        <AntDesign
                            name="checkcircleo"
                            size={24}
                            color="#35C442"
                        />
                    </IconButton>
                </LoginButton>
            )}
        </Wrapper>
    );
};

export default SecondStep;
