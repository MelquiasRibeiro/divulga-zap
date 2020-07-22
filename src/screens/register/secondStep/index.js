import React, { useEffect, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/backButton';

import {
    Wrapper,
    ImageLogo,
    UserData,
    LoginContainer,
    Label,
    Input,
    LoginButton,
    TextButton,
    IconButton,
} from './styles';

const SecondStep = ({ route }) => {
    const [typeUser, setTypeUser] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passWordEqual, setPasswordEqual] = useState(true);

    const navigation = useNavigation();

    const user = route.params.advertiser;

    useEffect(() => {
        setTypeUser(user);
    }, []);

    useEffect(()=>{
        comparePassword();
    },[passwordConfirmation,password]);

    function comparePassword(){
        if(password !== passwordConfirmation){
            setPasswordEqual(false)
        }
    }

    function handleNavigateToSucess() {
        navigation.navigate('Successfully');
    }
    function handleNavigateToNext() {
        navigation.navigate('Register3');
    }

    return (
        <Wrapper>
            <ImageLogo source={require('../../../assets/images/Logo.png')} />
            <BackButton/>
            <UserData>Seus dados: </UserData>
            <LoginContainer>
                <Label>Nome</Label>
                <Input onChangeText={(name) =>
                       setName(name)
                        } />
                <Label>Email</Label>
                <Input onChangeText={(email) =>
                       setEmail(email)
                        }/>
                <Label>Senha</Label>
                <Input onChangeText={(password) =>
                            setPassword(password)
                        }/>
                <Label>Confirmação de Senha</Label>
                <Input onChangeText={(passwordConfirmation) =>
                            setPasswordConfirmation(passwordConfirmation)
                        } />
            </LoginContainer>
            {typeUser ? (
                <LoginButton onPress={handleNavigateToNext}>
                    <TextButton>Avançar</TextButton>
                    <IconButton>
                        <Feather name="arrow-right" color="#35C442" size={24} />
                    </IconButton>
                </LoginButton>
            ) : (
                <LoginButton onPress={handleNavigateToSucess}>
                    <TextButton>Registrar</TextButton>
                    <IconButton>
                        <AntDesign
                            name="checkcircleo"
                            size={24}
                            color="#35C442"
                        />
                    </IconButton>
                </LoginButton>
            )}
        </Wrapper>
    );
};

export default SecondStep;
