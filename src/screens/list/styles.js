import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`;
export const HeaderBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #243a45;
    height: 80px;
`;

export const ContainerButtonMenuHeaderBar = styled.View`
    margin-top: 36px;
    margin-left: 16px;
    margin-right: 16px;
`;
export const ContainerButtonSearcHeaderBar = styled.View`
    margin-top: 36px;
    margin-left: 16px;
    margin-right: 16px;
`;
export const ButtonHeaderBar = styled.TouchableOpacity`
    align-items: center;
`;
export const Menu = styled.View`
    flex-direction: row;
    height: 54px;
    align-items: center;
`;
export const Option = styled.TouchableOpacity`
    flex: 3;
    align-items: center;
    justify-content: center;
    background-color: red;
    height: 54px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const TextOption = styled.Text`
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #243a49;
`;
export const AdvertisementContainer = styled.ScrollView.attrs({
    alignItems: 'center',
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
`;
