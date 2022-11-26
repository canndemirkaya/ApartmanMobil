import React, { useState, Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, Alert, TextInput, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


import LinearGradient from 'react-native-linear-gradient';
import styles from '../src/style/savedClient/style'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class SavedClientScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        username: '',
        password: '',
          
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#5a9eff', '#0049b1','#fff']} style={styles.linearGradient}>
          <View style={styles.header}>
            
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.goBack()
              }}>
                <EvilIcons name='arrow-left' size={35} color='#fff'/>
              </TouchableOpacity>
            </View>
            <View style={styles.v_headerText}>
              <Text style={styles.headerText}>ApartmanMobil </Text>
            </View>
          </View>
          <View style={styles.v_main}>
                <FontAwesome name="user-circle-o" size={50} style={styles.mainIconUser}/>
                <Text style={styles.t_mainTextType1}>Can DEMİRKAYA</Text>
                <Text style={styles.t_mainTextType2}>Emlak Konutları Apt.</Text>
                <Text style={styles.t_mainTextType2}>Bireysel</Text>
                <View style={styles.v_textBox}>
                    <View style={{flexDirection:'row', width:screenWidth-50, justifyContent:'center', alignItems:'center',}}>
                            <EvilIcons name="lock" size={32} style={styles.iconType1}/>
                            <TextInput
                            style={styles.inputType1}
                            placeholder='Şifre'
                            onChangeText={(password) => {this.setState({password})}}
                            value={this.state.password}
                            secureTextEntry={true}
                            />
                            </View>
                    </View>
                <TouchableOpacity onPress={() => {
                    }}> 
                    <Text style = {{fontSize:17, color:'#fff', marginTop:10}}> Şifreni mi unuttun? 
                        <Text style = {{fontSize:18, color:'#0049b1', fontWeight:'bold'}}> Yeni şifre al!</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  console.log(this.state.password)
                  if(this.state.confirmPass == this.state.password)
                    this.props.navigation.navigate('Home')
                  }}
                  style={{marginTop:10}}
                > 
                    <Text style = {styles.b_buttonType3}>
                        Giriş
                    </Text>                  
                </TouchableOpacity>
            </View>
        
        </LinearGradient>
      </View>
    );
  }
    
}