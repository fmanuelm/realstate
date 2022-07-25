// Example of Splash, Login and Sign Up in React Native

// https://aboutreact.com/react-native-login-and-signup/

 

// Import React and Component

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {View, Text, SafeAreaView, TextInput, Button } from 'react-native';

 

const SettingsScreen = ({navigation}) => {

  return (

    <SafeAreaView style={{flex: 1}}>

      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Your Balance {'100.00'} USD
          </Text>
        <TextInput 
          placeholder="Specific the Value $"
          style={{border: '1px solid #ddd', textAlign: 'center'}}
          keyboardType="numeric"
        />
        <Button title="Charge"/>
        </View>
        
        <Button title="Go Home" onPress={() => navigation.navigate('HomeScreenStack')}/>
      </View>

    </SafeAreaView>

  );

};

 

export default SettingsScreen;