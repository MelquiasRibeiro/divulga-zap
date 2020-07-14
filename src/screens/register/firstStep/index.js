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
    function handleNavigateToList() {
        navigation.navigate('Login');
    }
    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <BackButton onPress={handleNavigateToList}>
                <Feather name="arrow-left" color="#35C442" size={24} />
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>
            <Instructions>Vamos comerçar! O que você Busca?</Instructions>
            <ButtonsContainer>
                <OptionsBuntton>
                    <TextButton>Divulgação</TextButton>
                </OptionsBuntton>
                <OptionsBuntton>
                    <TextButton>Serviços</TextButton>
                </OptionsBuntton>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default Register;
