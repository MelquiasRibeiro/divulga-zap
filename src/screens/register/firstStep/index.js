import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Wrapper,
    ImageLogo,
    ButtonsContainer,
    OptionsBuntton,
    TextButton,
    Instructions,
    BackButton,
    BackButtonText,
} from './styles';

const Register = () => {
    const navigation = useNavigation();
    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }
    function handleNavigateToSecondStep(typeUser) {
        navigation.navigate('Register2', { advertiser: typeUser });
    }
    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <BackButton onPress={handleNavigateToLogin}>
                <Feather name="arrow-left" color="#35C442" size={24} />
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>
            <Instructions>Vamos começar! O que você Busca?</Instructions>
            <ButtonsContainer>
                <OptionsBuntton
                    onPress={() => {
                        handleNavigateToSecondStep(true);
                    }}
                >
                    <TextButton>Divulgação</TextButton>
                </OptionsBuntton>
                <OptionsBuntton
                    onPress={() => {
                        handleNavigateToSecondStep(false);
                    }}
                >
                    <TextButton>Serviços</TextButton>
                </OptionsBuntton>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default Register;
