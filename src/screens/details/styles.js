import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`;
export const HeaderBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

export const ContainerButtonMenuHeaderBar = styled.View`
    margin-top: 36px;
    margin-left: 16px;
    margin-right: 16px;
`;
export const ButtonHeaderBar = styled.TouchableOpacity`
    align-items: center;
`;
export const Container = styled.ScrollView``;
export const Name = styled.Text`
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    color: #243a49;
    margin: 32px 0 0 0;
    align-self:center;
`;
export const ProfilePicture = styled.Image`
    width: 234px;
    height: 234px;
    border-radius:117px;
    border: 1px solid #35C442;
    align-self:center;
    margin: 32px 0 0 0;
    background: #e5e5e5e5;
`;

export const DescriptionContainer = styled.View`
    max-height:198px;
    width:290px;
    border: 1px solid #35C442;
    align-self:center;
    border-radius:16px;
    padding: 8px;
    margin: 32px 0 0 0;
    background-color:#ffffff;

`;
export const Description = styled.Text`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #243a49;
    justify-content: flex-start;
`;

export const EvaluationContainer = styled.View`
    align-self:center;
    width:193px;
    border: 1px solid #35C442;
    margin: 0 0 0 0;
    border-radius:16px;
    padding: 8px;
    align-items:center;
`;

export const EvaluationTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #243a49;
    justify-content: flex-start;
    margin: 0 0 16px 0;

`;

export const ContactTitle = styled.Text`
    align-self:center;
    font-weight: bold;
    font-size: 20px;
    color: #243a49;
    justify-content: flex-start;
    margin: 16px 0 0 0;  
`;
export const ContactButtonsContainer =styled.View`
    align-self:center;
    flex-direction:row;

`;
export const ContactButton = styled.TouchableOpacity`
    background-color: #fafafafa;
    height: 56px;
    width: 56px;
    border-radius: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: center;
    margin: 16px 16px 32px 16px;
    border: 1px solid #35C442;

`;