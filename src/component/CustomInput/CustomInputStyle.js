import { View, Text, TextInput, StyleSheet } from 'react-native';
export const inputStyles = StyleSheet.create({
    container: {
     backgroundColor: '#FFFFFF',
     width: '80%',
 
     borderColor: '#CFD6E2',
     borderWidth: 1,
 
     height: 48,
 
     paddingHorizontal: 16,
 
    },
    firstContainer: {
     backgroundColor: '#FFFFFF',
     width: '80%',
 
     borderColor: '#CFD6E2',
     borderWidth: 1,
 
     height: 48,
 
     paddingHorizontal: 16,

     borderTopLeftRadius: 13,
     borderTopRightRadius: 13,
    },
    secondContainer: {
     backgroundColor: '#FFFFFF',
     width: '80%',
 
     borderColor: '#CFD6E2',
     borderWidth: 1,
     borderTopWidth: 0,
 
     height: 48,
 
     paddingHorizontal: 16,

     borderBottomLeftRadius: 13,
     borderBottomRightRadius: 13,
    },
    input: {},
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#FA3E4C',
        width: '80%',
        height: 52,
        marginTop: 24,
        paddingTop: 11,
        borderRadius: 12
    },
    buttonTextStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    }
 });