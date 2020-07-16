import React from 'react';
import { Button,BackButtonText } from './styles';
import { Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'



const BackButton = () => {
    const navigation = useNavigation();

    function handleNavigateToBack(){
        navigation.goBack()
    }
  return (
    <Button onPress={handleNavigateToBack}>
    <Feather name="arrow-left" color="#35C442" size={24} />
    <BackButtonText>Voltar</BackButtonText>
    </Button>
  );
}

export default BackButton;