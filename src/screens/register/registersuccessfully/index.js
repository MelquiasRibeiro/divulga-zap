import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Wrapper,
    ImageLogo,
    SucessIcon,
    ContinueBuntton,
    TextButton,
    Instructions,
} from './styles';

const Registersuccessfully = () => {
    const navigation = useNavigation();

    function handleNavigateToList() {
        navigation.navigate('List');
    }
    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <Instructions>Registro realizado com sucesso!</Instructions>
            <SucessIcon>
                <AntDesign name="checkcircleo" size={150} color="#35C442" />
            </SucessIcon>
            <ContinueBuntton onPress={handleNavigateToList}>
                <TextButton>Continuar</TextButton>
            </ContinueBuntton>
        </Wrapper>
    );
};

export default Registersuccessfully;
