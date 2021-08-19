import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,Image} from 'react-native';

export default class HomeScreen extends React.Component{
render(){
    return(
        <View>
            <ImageBackground 
            source = {require('../assets/stars.gif')}
            style = {styles.background}
            >
                <View style = {styles.viewUni}>
                    <Text style = {styles.text1}>HomeScreen</Text>
                </View>

                <View style = {styles.viewButton}   >
                  <TouchableOpacity
                  style = {styles.buttonUni}
                  onPress = {()=>{this.props.naviagtion.naviagate('DailyPicsScreen')}}
                  >
                      <Text style = {styles.buttonText}>DailyPics</Text>
                      <Image source = {require('../assets/daily_pictures.png')}
                        style = {[styles.imgButton,{width:50,height:50,top:-60}]}
                      />
                  </TouchableOpacity>
                 
                </View>
                <View style = {styles.viewButton}>
                  <TouchableOpacity
                  style = {styles.buttonUni}
                  onPress = {()=>{this.props.naviagtion.naviagate('SpaceCraftsScreen')}}
                  >
                      <Text style = {styles.buttonText}>SpaceCrafts</Text>
                      <Image source = {require('../assets/main-icon.png')}
                        style = {styles.imgButton}
                      />
                  </TouchableOpacity>
                 
                </View>
                <View style = {styles.viewButton}>
                  <TouchableOpacity
                  style = {styles.buttonUni}
                  onPress = {()=>{this.props.naviagtion.naviagate('StarMapScreen')}}
                  >
                      <Text style = {styles.buttonText}>StarMap</Text>
                      <Image source = {require('../assets/star_map.png')}
                        style = {[styles.imgButton,{width:80,height:80,top:-70}]}
                      />
                  </TouchableOpacity>
                 
                </View>
            </ImageBackground>
        </View>
    )
}

}

const styles = StyleSheet.create({
viewUni:{
flex:0.5,
alignItems:'center'
},
viewButton:{
    alignItems:'center'
},

    text1:{
fontSize:25,
marginTop:40,
alignSelf:'center',
color:'white',
fontWeight:'bold'
},
background:{
resizeMode:'cover',
width:'100%',
height:'100%'
},
buttonText:{
color:"lightgrey",
fontSize:25,
fontWeight:'bold',
marginTop:17
},
buttonUni:{
width:300,
height:70,
borderWidth:3,
alignItems:'center',
borderRadius:30,
backgroundColor:"rgb(66, 32, 124)",
marginBottom:30

},
imgButton:{
width:100,
height:100,
left:100,
top:-90
},

})