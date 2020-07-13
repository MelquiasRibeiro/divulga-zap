import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    ProfilePicture,
    TextContainer,
    Title,
    Description,
    WppButton,
} from './styles';

export default function Advertisement() {
    return (
        <Container>
            <ProfilePicture
                source={require('../../assets/images/encanador.png')}
            />
            <TextContainer>
                <Title>Jorge Encanador</Title>
                <Description>
                    Pronto para resolver quaisquer problemas no seu cano.
                </Description>
            </TextContainer>
            <WppButton>
                <FontAwesome name="whatsapp" size={40} color="#FAFAFA" />
            </WppButton>
        </Container>
    );
}
