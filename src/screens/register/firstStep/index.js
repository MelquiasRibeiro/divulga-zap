import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/backButton';

import {
    Wrapper,
    ImageLogo,
    ButtonsContainer,
    OptionsBuntton,
    TextButton,
    Instructions,
} from './styles';

const Register = () => {
    const navigation = useNavigation();
    function handleNavigateToSecondStep(typeUser) {
        navigation.navigate('Register2', { advertiser: typeUser });
    }
    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <BackButton />
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
