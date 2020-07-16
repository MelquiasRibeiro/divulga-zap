import React from 'react';
import BackButton from '../../components/backButton';


import {
    Wrapper,
    HeaderBar,
    ButtonHeaderBar,
    ContainerButtonMenuHeaderBar,
    ContainerButtonSearcHeaderBar,
} from './styles';

const Details = () => {
  return(

    <Wrapper>
            <HeaderBar>
                <ContainerButtonMenuHeaderBar>
                    <ButtonHeaderBar>
                        <BackButton/>
                    </ButtonHeaderBar>
                </ContainerButtonMenuHeaderBar>
                <ContainerButtonSearcHeaderBar>
                    <ButtonHeaderBar>
                    </ButtonHeaderBar>
                </ContainerButtonSearcHeaderBar>
            </HeaderBar>
        </Wrapper>
  );
}

export default Details;