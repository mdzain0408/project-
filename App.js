
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DpScreen from './screens/DailyPics'
import ScScreen from './screens/SpaceCrafts'
import SmScreen from './screens/StarMap'
import HomeScreen from './screens/Homescreen'


const Stack = createStackNavigator();

export default function App() {
  return (
   
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{headerShown:false}}>

             <Stack.Screen name = "DailyPicsScreen" component = {DpScreen}/>
             <Stack.Screen name = "SpaceCraftsScreen" component = {ScScreen}/>
             <Stack.Screen name = "StarMapScreen" component = {SmScreen}/>
             <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
    

        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
