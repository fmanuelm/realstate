// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import { getUserWallet_API, getUserDetails_API } from '../../api/api';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {
  const [balance, setBalance] = useState({"usd":10, "cop":0});
  const [name, setName] = useState("");
  const getUserWalletAPI = async () => {
    try {
      const user_ID = await AsyncStorage.getItem('user_id');
      const dataToSend = {user_id: user_ID};
      const responseJson = await getUserWallet_API(dataToSend);
      console.log(responseJson);
      if (responseJson.status === 'success') {
        setBalance(responseJson.data);
        
      }
      else {

      }
    }
    catch (err) { 
    }
  }
  const getUserDetailsAPI = async () => {
    try {
      const user_ID = await AsyncStorage.getItem('user_id');
      const dataToSend = {user_id: user_ID};
      const responseJson = await getUserDetails_API(dataToSend);
      setName(responseJson.fullname);
      console.log("Data of response json");
      console.log(responseJson);
    }
    catch(err) {
      console.log("error..");
    }
  }
  useEffect(()=>{
    getUserWalletAPI();
    getUserDetailsAPI();
  },[]);
  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={{flex: 1, padding: 16}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Hello
            {'\n'}
            {name}
          </Text>
        </View>
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Your Balance:
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            { balance.usd } USD
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            { balance.cop } COP
          </Text>
        </View>
        
        <Button title="Charge" onPress={() => navigation.navigate('settingScreenStack')}/>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;