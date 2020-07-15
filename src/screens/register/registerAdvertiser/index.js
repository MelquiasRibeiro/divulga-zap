import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapViwe, { Marker } from 'react-native-maps';

import {
    Wrapper,
    ImageLogo,
    BackButton,
    BackButtonText,
    UserData,
    MapContainer,
    RegisterContainer,
    Label,
    Input,
    RegisterButton,
    TextButton,
    IconButton,
    TextAreaDescription,
    ImageButton,
    Container,
} from './styles';

const RegisterAdvertiser = () => {
    const navigation = useNavigation();

    function handleNavigateToBack() {
        navigation.navigate('Register2');
    }
    function handleNavigateToSucess() {
        navigation.navigate('Successfully');
    }
    return (
        <Wrapper>
            <Container>
                <ImageLogo
                    source={require('../../../assets/images/Logo.png')}
                />
                <BackButton onPress={handleNavigateToBack}>
                    <Feather name="arrow-left" color="#35C442" size={24} />
                    <BackButtonText>Voltar</BackButtonText>
                </BackButton>
                <UserData>Dados do seu negócio : </UserData>
                <RegisterContainer>
                    <Label>Localização Da Empresa (opcional)</Label>
                    <MapContainer>
                        <MapViwe
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            initialRegion={{
                                latitude: -2.5184301,
                                longitude: -44.253935,
                                latitudeDelta: 0.014,
                                longitudeDelta: 0.014,
                            }}
                        />
                    </MapContainer>
                    <Label>Nome Da Empresa</Label>
                    <Input />
                    <Label>WathsApp</Label>
                    <Input />
                    <Label>Descreva seu negócio</Label>
                    <TextAreaDescription multiline numberOfLines={4} />
                    <Label>Escolha uma imagem para seu negocio</Label>
                    <ImageButton>
                        <Feather name="camera" size={36} color="#35C442" />
                    </ImageButton>
                </RegisterContainer>
                <RegisterButton onPress={handleNavigateToSucess}>
                    <TextButton>Registrar</TextButton>
                    <IconButton>
                        <AntDesign
                            name="checkcircleo"
                            size={24}
                            color="#35C442"
                        />
                    </IconButton>
                </RegisterButton>
            </Container>
        </Wrapper>
    );
};

export default RegisterAdvertiser;