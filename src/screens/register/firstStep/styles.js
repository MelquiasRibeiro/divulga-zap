import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
    align-items: center;
`;
export const ImageLogo = styled.Image`
    margin-top: 52px;
`;

export const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    align-self: flex-start;
    margin: 24px 0 0 16px;
`;

export const BackButtonText = styled.Text`
    font-size: 20px;
    line-height: 23px;
    color: #243a49;
`;

export const Instructions = styled.Text`
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    color: #243a49;
    margin: 70px 16px 0 40px;
`;

export const ButtonsContainer = styled.View`
    margin-top: 142px;
    flex-direction: row;
    justify-content: space-between;
`;

export const OptionsBuntton = styled.TouchableOpacity`
    flex-direction: row;
    width: 116px;
    height: 53px;
    border-radius: 8px;
    background-color: #314958;
    align-items: center;
    margin: 24px 32px 24px 32px;
`;
export const TextButton = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
`;
