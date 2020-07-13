import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import Advertisement from '../../components/advertisement/index';

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
} from './styles';

const List = () => {
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
                <Advertisement />
                <Advertisement />
                <Advertisement />
                <Advertisement />
                <Advertisement />
                <Advertisement />
            </AdvertisementContainer>
        </Wrapper>
    );
};

export default List;
