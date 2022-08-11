import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';

export const CustomButton = ({buttonStyle, buttonTextStyle, onPress, text}) => {
   return(
    <Pressable onPress={onPress} style={buttonStyle}>
        <Text style={buttonTextStyle}>{text}</Text>
    </Pressable>
   )
}

