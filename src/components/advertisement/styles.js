import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 12px;
    flex-direction: row;
    align-items: center;
    width: 344px;
    height: 114px;
    background: #fafafa;
    border: 0.3px solid #e5e5e5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;
export const ProfilePicture = styled.Image`
    background-color: #e5e5e5e5;
    height: 80px;
    width: 80px;
    border-radius: 4px;
    margin: 14px 8px 14px 8px;
`;
export const TextContainer = styled.View`
    flex: 3;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #243a49;
    margin-bottom: 8px;
`;
export const Description = styled.Text.attrs({
    numberOfLines: 3,
})`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #243a49;
    justify-content: flex-start;
`;
export const WppButton = styled.TouchableOpacity`
    background-color: #35c442;
    height: 56px;
    width: 56px;
    border-radius: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: center;
    margin: 14px 8px 14px 8px;
`;
