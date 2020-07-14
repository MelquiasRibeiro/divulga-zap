import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
    align-items: center;
`;
export const ImageLogo = styled.Image`
    margin-top: 52px;
`;

export const Instructions = styled.Text`
    margin-top: 48px;
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    color: #243a49;
    margin-left: 48px;
`;

export const SucessIcon = styled.View`
    margin-top: 96px;
`;
export const ContinueBuntton = styled.TouchableOpacity`
    flex-direction: row;
    width: 200px;
    height: 53px;
    border-radius: 8px;
    background-color: #314958;
    align-items: center;
    margin-top: 96px;
    text-align: center;
`;
export const TextButton = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
`;
