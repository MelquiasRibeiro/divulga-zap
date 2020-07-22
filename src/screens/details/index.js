import React,{useState,useEffect} from 'react';
import BackButton from '../../components/backButton';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';


import {
    Wrapper,
    HeaderBar,
    ButtonHeaderBar,
    ContainerButtonMenuHeaderBar,
    Container,
    Name,
    ProfilePicture,
    DescriptionContainer,
    Description,
    EvaluationContainer,
    EvaluationTitle,
    ContactTitle,
    ContactButtonsContainer,
    ContactButton,
} from './styles';

const Details = () => {
    const [starCount,setStarCount] = useState(3)

    function  onStarRatingPress(rating) {
        setStarCount(
            rating
        )       
      }

  return(

    <Wrapper>
            <HeaderBar>
                <ContainerButtonMenuHeaderBar>
                    <ButtonHeaderBar>
                        <BackButton/>
                    </ButtonHeaderBar>
                </ContainerButtonMenuHeaderBar>
            </HeaderBar>
            <Container>
                <Name>Jorge Encanador</Name>
                <ProfilePicture source={require('../../assets/images/encanador.png')}/>
                <EvaluationContainer>
                    <EvaluationTitle>Avaliação</EvaluationTitle>
                    <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={starCount}
                            selectedStar={(rating) => onStarRatingPress(rating)}
                            fullStarColor={'#35C442'}
                            emptyStarColor={'#35C442'}
                            starSize ={32}	

                    />
                </EvaluationContainer>
                <DescriptionContainer>
                    <Description>
                    Pronto para resolver  quaisquer probelmas  no seu cano,
                    sou encanador com mais de 20 anos de experiencia ,
                    hoje dono de uma empresa que preza pela satisfação do 
                    cliente atraves da realização de um trabalho de qualidade
                    e que permita a  feliciaded do cliente
                    </Description>
                </DescriptionContainer>
                    <ContactTitle>Contatos:</ContactTitle>
                    <ContactButtonsContainer>
                        <ContactButton>
                            <FontAwesome name="whatsapp" size={40} color="#243A49" />
                        </ContactButton>
                        <ContactButton>
                            <MaterialIcons name="email" size={36} color="#243A49"  />
                        </ContactButton>
                    </ContactButtonsContainer>
            </Container>
    </Wrapper>
  );
}

export default Details;