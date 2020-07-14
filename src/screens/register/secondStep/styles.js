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

export const UserData = styled.Text`
    font-size: 20px;
    line-height: 23px;
    color: #243a49;
    font-weight: bold;
    margin-top: 16px;
`;

export const LoginContainer = styled.View`
    margin-top: 20px;
    align-items: flex-start;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #243a45;
    margin-top: 16px;
`;

export const Input = styled.TextInput`
    width: 295px;
    height: 48px;
    background: #e5e5e5;
    border: 1px solid #35c442;
    border-radius: 8px;
    margin-top: 8px;
    font-size: 16px;
    padding-left: 8px;
`;

export const LoginButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 200px;
    height: 53px;
    border-radius: 8px;
    background-color: #314958;
    align-items: center;
    margin-top: 28px;
    overflow: hidden;
    text-align: center;
`;
export const TextButton = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin-left: 30px;
`;
export const IconButton = styled.View`
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 53px;
    background-color: #243a49;
`;
