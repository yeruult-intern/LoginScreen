import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/images/Logo.png';
import CustomInput from '../component/CustomInput/CustomInput';
import { CustomButton } from '../component/CustomButton/CustomButton';
import { inputStyles } from '../component/CustomInput/CustomInputStyle';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.log('Signed In');
        //validate user
        navigation.navigate('Menu')
    };

  return(
    <View style={styles.root}>
        <Image 
          source={Logo}  
          style={styles.logo} 
          resizeMode="contain"
        />
        <CustomInput 
        placeholder='Утасны дугаар' 
        value={username} 
        setValue={setUsername}
        customStyle={inputStyles.firstContainer} />
        <CustomInput 
        placeholder='Таны нууц үг' 
        value={password} 
        setValue={setPassword}
        customStyle={inputStyles.secondContainer}/>
        <CustomButton 
        buttonStyle={inputStyles.buttonContainer}
        buttonTextStyle={inputStyles.buttonTextStyle}
        text='Нэвтрэх'
        onPress={onSignInPressed}/>

        
        
    </View>
  )
}

const styles= StyleSheet.create({
    root: {
      alignItems: 'center',
    },
    logo: {
      width: '70%',
      maxWidth: 241,  
      height: 56,

      marginTop: 114,
      marginRight: 40,
      marginBottom: 82

    },
})

export default SignInScreen;
