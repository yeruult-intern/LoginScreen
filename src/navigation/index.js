import React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import MenuScreen from '../screens/MenuScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='Menu' component={MenuScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

