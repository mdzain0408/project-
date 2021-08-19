import React from 'react';
import { StyleSheet, Text, View,TextInput, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const path  = "https://virtualsky.lco.global/embed/index.html?longitude=27.17.102493&latitude=89.7.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
export default class SMScreen extends React.Component{

constructor(){
    super();
    this.state = {
        latitude:"",
        longitude:""
    }
}

render(){
    return(
        <View>
            <SafeAreaView style = {styles.safeArea}/>
            <View style = {styles.view1}>
                <Text style = {styles.tittle}>Star Map Screen</Text>
                
                    <TextInput
                    style = {styles.textinput}
                    placeholder = "Enter Latitude"
                    onChangeText = {
                        (text)=>{
                            this.setState({
                                latitude:text
                            })
                        }
                    }
                    />
                     <TextInput
                    style = {styles.textinput}
                    placeholder = "Enter Longitude"
                    onChangeText = {
                        (text)=>{
                            this.setState({
                                longitude:text
                            })
                        }
                    }
                    />
                
            </View>
            <View>
                <WebView
                  scalesPageToFit = {true}
                  source = {{uri:path}}
                  style = {styles.webview}
                />
            </View>
        </View>
    )
}

}

const styles = StyleSheet.create({
    safeArea: {
        marginTop:
          Platform.OS === 'android' ? StatusBar.currentHeight : 50,
      },
    
    view1:{
      alignItems:'center',
      height:70,
      backgroundColor:"purple",

    },
    tittle:{
       alignSelf:'center',
       fontSize:30,
       paddingBottom:50,
       marginTop:20,
       fontWeight:'bold',
       color:"white",
       
    },
    textinput:{
      borderWidth:1,
      borderRadius:5,
      width:250,
      height:50,
      marginTop:20,
      
    },
    webview:{
      marginTop:10,
      marginBottom:10
    },
})