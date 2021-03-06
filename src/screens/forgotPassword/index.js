import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/backButton';


import {
    Wrapper,
    ImageLogo,
    EmailContainer,
    Label,
    Input,
    RecoveryBuntton,
    TextButton,
    IconButton,
    Instructions,
} from './styles';

const ForgotPassword = () => {
    const navigation = useNavigation();
    function handleNavigateToList() {
        navigation.navigate('Login');
    }
    return (
        <Wrapper>
            <ImageLogo source={require('../../assets/images/Logo.png')} />
            <BackButton />
            <Instructions>
                Digite seu email de cadastro abaixo para receber mais
                informaçẽos por email.
            </Instructions>
            <EmailContainer>
                <Label>Email</Label>
                <Input />
            </EmailContainer>
            <RecoveryBuntton>
                <TextButton>Recuperar</TextButton>
                <IconButton>
                    <MaterialIcons name="email" size={24} color="#35C442" />
                </IconButton>
            </RecoveryBuntton>
        </Wrapper>
    );
};

export default ForgotPassword;
