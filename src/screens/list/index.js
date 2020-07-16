import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import Advertisement from '../../components/advertisement/index';
import { useNavigation } from '@react-navigation/native';

import {
    Wrapper,
    HeaderBar,
    ButtonHeaderBar,
    Menu,
    Option,
    TextOption,
    ContainerButtonMenuHeaderBar,
    ContainerButtonSearcHeaderBar,
    AdvertisementContainer,
    DetailsButton,
} from './styles';

const List = () => {
    const navigation = useNavigation();

    function handleNavigateToDetails() {
        navigation.navigate('Details');
    }
    return (
        <Wrapper>
            <HeaderBar>
                <ContainerButtonMenuHeaderBar>
                    <ButtonHeaderBar>
                        <Feather name="menu" size={24} color="#fafafafa" />
                    </ButtonHeaderBar>
                </ContainerButtonMenuHeaderBar>
                <ContainerButtonSearcHeaderBar>
                    <ButtonHeaderBar>
                        <AntDesign name="search1" size={24} color="#fafafafa" />
                    </ButtonHeaderBar>
                </ContainerButtonSearcHeaderBar>
            </HeaderBar>
            <Menu>
                <Option>
                    <TextOption>Categorias</TextOption>
                </Option>
                <Option>
                    <TextOption>Região</TextOption>
                </Option>
                <Option>
                    <TextOption>Filtros</TextOption>
                </Option>
            </Menu>
            <AdvertisementContainer>
               <DetailsButton onPress ={handleNavigateToDetails}> 
                <Advertisement />
               </DetailsButton> 
               <DetailsButton> 
                <Advertisement />
               </DetailsButton> 
               <DetailsButton> 
                <Advertisement />
               </DetailsButton> 
               <DetailsButton> 
                <Advertisement />
               </DetailsButton> 
               <DetailsButton> 
                <Advertisement />
               </DetailsButton> 
               <DetailsButton> 
                <Advertisement />
               </DetailsButton> 
            </AdvertisementContainer>
        </Wrapper>
    );
};

export default List;
