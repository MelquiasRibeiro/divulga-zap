import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Register from './screens/register';
import List from './screens/list';

const Appstack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Appstack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5',
                    },
                }}
            >
                <Appstack.Screen name="Login" component={Login} />
                <Appstack.Screen name="Register" component={Register} />
                <Appstack.Screen name="List" component={List} />
            </Appstack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
