import React, { useEffect, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/backButton';
import {ActivityIndicator} from "react-native";
import firebase from 'firebase';

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
import { set } from 'react-native-reanimated';

const SecondStep = ({ route }) => {
    const [isAdvertiser, setIsAdvertiser] = useState();
    const [loading, setLoading]=useState(false);
    const [diferent, setDiferent]=useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passWordEqual, setPasswordEqual] = useState(true);
    const [userId, setUserId]= useState('')

    const navigation = useNavigation();

    const user = route.params.advertiser;

    useEffect(() => {
        setIsAdvertiser(user);
    }, []);

    useEffect(()=>{
        comparePassword();
    },[passwordConfirmation,password]);

    function comparePassword(){
        if(password !== passwordConfirmation){
            setPasswordEqual(false)
        }
    }

    async function RegisterUserData() {
        setLoading(true); 
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( function(result) {
            setUserId(result.user.uid);
            console.log(userId)
            firebase.database().ref(`users/ + ${userId}`).set({
            username: name,
            email: email,
            isAdvertiser : isAdvertiser,
            }).then(function(result){
                setLoading(false)
            }).catch(function(err){
                console.log(err)
                setLoading(false)
            })
        })
        .catch(function(error) {
                setLoading(false)
                console.log(error)
        });

    }

    function handleNavigateToSucess() {
        RegisterUserData()
        setUserId('')
        navigation.navigate('Successfully',{userId});
    }
    function handleNavigateToNext() {
        RegisterUserData()
        navigation.navigate('Register3',{userId});
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
            {isAdvertiser ? (
                <LoginButton onPress={handleNavigateToNext}>
                    <TextButton>Avançar</TextButton>
                    <IconButton>
                    { loading? 
                       <ActivityIndicator 
                            size={24} 
                            color="#35C442"/>
                        :<Feather 
                            name="arrow-right" 
                            color="#35C442" 
                            size={24} />
                    }
                    </IconButton>
                </LoginButton>
            ) : (
                <LoginButton onPress={handleNavigateToSucess}>
                    <TextButton>Registrar</TextButton>
                    <IconButton>
                       { loading? 
                       <ActivityIndicator 
                            size={24} 
                            color="#35C442"/>
                        :<AntDesign
                            name="checkcircleo"
                            size={24}
                            color="#35C442"
                        />}
                        
                    </IconButton>
                </LoginButton>
            )}
        </Wrapper>
    );
};

export default SecondStep;
