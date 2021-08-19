import React from 'react';
import { Alert, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView, Platform,Dimensions } from 'react-native';
import axios from 'axios';

export default class SCScreen extends React.Component{


render(){
    return(
        <View style = {styles.container}>
            <Text>SpaceCraftScreen</Text>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
      flex:0.5,
      alignItems:"center"
    },
})