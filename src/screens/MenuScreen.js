import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList, } from 'react-native'
import React, {useState} from 'react';
import Footer from '../component/CustomFooter/Footer';
import notif_bell from '../../assets/images/notif_bell.png'
import profile_pic from '../../assets/images/profile_pic.png'

const listTabs =[
  {
    status: 'Төгрөг'
  },
  {
    status: "Крипто"
  },
  {
    status: 'Карт'
  },
]
const data = [
  {},
  {},
  {},
]



const MenuScreen = () => {

  const [status, setStatus] = useState('All');
  const setStatusFilter =status =>{
    setStatus(status)
  }


  return (
    <View style={{flex: 1}}>
      <ScrollView >
        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={styles.TopWrapperStyle}>
              <Text style={styles.TopWrapperText}>Hey, Сайн уу</Text>
              <View style={styles.BurtgelWrapper}>
                <Text style={{color: '#FF8A01'}}>Бүртгэлгүй</Text>
              </View>
            </View>
          </View>
          <View style={styles.TopWrapperRight}>
           <Image style={styles.notifLogo} source={require('../../assets/images/notif_bell.png')} />
           <Image style={styles.accLogo} source={require('../../assets/images/profile_pic.png')} />
          </View>
        </View>
        <View>
          <Text 
          style={{marginTop: 30, 
                  marginLeft: 32, 
                  fontSize: 18, 
                  fontWeight: '500', 
                  color: '#191F23'}} >
            Миний хэтэвч
          </Text>
        </View>
        
          <View style={styles.walletBackground}>
            {
              listTabs.map(e => (
                <TouchableOpacity 
                style={[ styles.btnTab, status === e.status && styles.btnTabActive ]}
                onPress={()=> setStatusFilter(e.status)}>
                  <Text style={styles.wallletText}>{e.status}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
          
          <FlatList>

          </FlatList>

        <View>

        </View>
      </ScrollView>
      <Footer />
    </View>
      
      
  )
}


const styles = StyleSheet.create({
   BurtgelWrapper: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#FF8A01',
    opacity: 0.2,
    width: 100,
    height: 24,
    borderRadius: 15
    
   },
   TopWrapperStyle:{
      paddingHorizontal: 32,
      paddingTop: 45
   },
   TopWrapperText: {
    fontSize: 24,
    fontFamily: 'Nunito',
    color: '#191F23'
   },
   TopWrapperRight: {
      flexDirection: 'row',
   },
   TopWrapperRightRight: {
      flexDirection: 'row',
   },
   notifLogo: {
    marginTop: 45,
    marginLeft: 61
   },
   accLogo: {
    marginTop: 45,
    marginLeft: 20,
   },
   walletBackground: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 15,
    flexDirection: 'row',
    marginHorizontal: 20,

   },
   wallletText: {
    // paddingLeft: 24,
    // color: '#FFFFFF',
    paddingVertical: 13
   },
   btnTabActive: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    
   },
   btnTab: {
    marginLeft: 24,
    width: 49
   },
})

export default MenuScreen