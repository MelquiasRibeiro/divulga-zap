import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
    align-items: center;
`;
export const ImageLogo = styled.Image`
    margin-top: 52px;
`;

export const LoginContainer = styled.View`
    margin-top: 100px;
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
    margin-top: 32px;
    overflow: hidden;
    text-align: center;
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
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
export const ErrorMessageContainer = styled.View`
    height:40px;
    width:250px;
    background-color: #F14336B0;
    margin: 16px 0 0 0;
    justify-content:center;
`;

export const ErrorMessage = styled.Text`
      color: #243a45;
      font-size: 14px;
      font-weight:bold;
      text-align:center
`;
export const AccountOptionsContainer = styled.View`
    margin-top: 16px;
    flex-direction: row;
`;

export const AccountOptions = styled.TouchableOpacity``;
export const AccountOptionsText = styled.Text`
    color: #243a45;
    font-size: 12px;
`;

export const SocialLoginLabel = styled.Text`
    color: #243a45;
    margin-top: 16px;
`;

export const SocialLoginButtonsContainer = styled.View`
    margin-top: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 96px;
`;

export const SocialLoginButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: solid 1px #e5e5e5e5;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.28);
    border-radius: 4px;
`;
