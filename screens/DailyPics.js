import React from 'react';
import { Alert, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView, Platform,Dimensions } from 'react-native';
import axios from 'axios';

export default class DpScreen extends React.Component{

constructor(){
    super();
    this.state = {
        apodData:""
    }
}  

getApod = ()=>{
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=gvYiZCCZcngb8RKjf9iHkIW5XLy8upizcPsz2kVl")
      .then(response=>{
          this.setState({
              apodData:response.data
          })
          
          })
          .catch(error=>{
            Alert.alert(error)
      })
}

componentDidMount  = ()=>{
this.getApod();
}

render(){
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {styles.safeArea}/>
           <ImageBackground
           source = {require("../assets/stars.gif")}
           style = {styles.imgBackground}
           >
                <View
                style = {styles.view1}>
            <Text style = {styles.tittle}>Star Map Screen</Text>
            <Text style = {styles.astrology}>Astromy Picture of the day</Text>
            <Text style = {[styles.astrology,{paddingBottom:70}]}>{this.state.apodData.title}</Text>
               </View>
            

            <TouchableOpacity
            onPress = {()=>Linking.openURL(this.state.apodData.url).catch(error =>{Alert.alert("Page Could not be loaded")})}
            >
              <View>
                 <Image source = {require("../assets/play-video.png")}/>
              </View>
            </TouchableOpacity>
            
            <Text style = {styles.para}>{this.state.apodData.explanation}</Text>
           
          </ImageBackground>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
      flex:0.5,
      alignItems:"center"
    },
    imgBackground:{
      alignItems:"center",
      height:Dimensions.get("window").height,
      width:Dimensions.get("window").width
    },
    astrology:{
      fontSize:30,
      color:"white",
      fontWeight:"bold",
      
    },
    safeArea:{
       marginTop: Platform.OS == 'android' ? 50 : 0
    },
    para:{
      fontSize:17,
      color:"red",
      textAlign:"center",
      marginTop:20
    },
    tittle:{
        alignSelf:'center',
        fontSize:30,
        paddingBottom:50,
        marginTop:20,
        fontWeight:'bold',
        color:"white",
        backgroundColor:"purple",
        width:"100%",
        height:50,
     },
     view1:{
        alignItems:"center",
        
     },
})