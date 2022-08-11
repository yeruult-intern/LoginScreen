import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { inputStyles } from './CustomInputStyle';


const CustomInput = ({value, setValue, placeholder, customStyle}) => {
    return(
        <View style={customStyle}>
           <TextInput 
           value={value}
           onChangeText={setValue}
           placeholder={placeholder}
           style={inputStyles.input}
           />
        </View>
        
    )
}


export default CustomInput;