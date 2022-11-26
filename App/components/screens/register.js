import React, { useState, Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput,
   Alert, Dimensions, ListViewBase } from 'react-native';
import { CheckBox } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {ListItem} from 'react-native-elements'
import Octicons from 'react-native-vector-icons/Octicons'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

import LinearGradient from 'react-native-linear-gradient';
import styles from '../src/style/clientLogin/style'
const list = [
  {
    title: 'Appointments',
  },
  {
    title: 'Trips',
  },
]

export default class RegisterScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        serial: '',
        name: '',
        type: 1,
        surname: '',
        phoneNumber: '',
        password: '',
        userType:0
          
    }
  }
  check = () => {
    if(!this.state.name || !this.state.surname || !this.state.serial || !this.state.password || !this.state.phoneNumber){
        alert("Tüm alanları doldurunuz.")
    }
    else {
        this.register();
    }
  }
  register = token => {
    fetch(`${API_URL}/register`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            "type": this.state.type,
            "serial": this.state.serial,
            "name": this.state.name,
            "surname": this.state.surname,
            "phoneNumber": this.state.phoneNumber,
            "password": this.state.password,
            "userType": this.state.userType
            // "AptRef": 1509
        })
    }).then(async res => {
      console.log(res.status)
      try {
        if(res.status === 500){
          alert("Serverla bağlantı kurulamıyor.")
        }
        if(res.status === 200){
          alert("Başarıyla kayıt olundu.")
          this.props.navigation.dispatch(state => {
            // Remove the home route from the stack
            const routes = state.routes.filter(r => r.name !== 'Register');
            return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
            });
          });
          this.props.navigation.navigate('Client');
          
        }
        if(res.status === 401){
          alert("Bu kimlik numarasına ait hesap vardır.")
        }
      } catch (error) {
        console.error(error)
      }
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack()
            }}>
              <EvilIcons name='arrow-left' size={35} color='#fff'/>
            </TouchableOpacity>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.textTypeWhiteHeader}>Kayıt ol!</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.inputBoxView}>
            <View style={styles.inputBox}>
              {/* <View style={styles.inputBoxText}>
              </View> */}
              <View style={styles.inputBoxInput}>
                <Text style={styles.textTypeGraySmall}>Artık kimlik numaranızla da giriş yapabilirsiniz.</Text>

                <TextInput 
                placeholder='TCKN'
                style={styles.inputType1}
                keyboardType='number-pad'
                maxLength={11}
                onChangeText={(serial) => this.setState({serial})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Adı'
                style={styles.inputType1}
                onChangeText={(name) => this.setState({name})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Soyadı'
                style={styles.inputType1}
                onChangeText={(surname) => this.setState({surname})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Telefon Numarası'
                style={styles.inputType1}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Şifre'
                style={styles.inputType1}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <CheckBox 
                title='Yönetici'
                checked={this.state.userType}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={() => {
                  if(this.state.userType==1){
                    this.setState({userType:0})
                    this.state.userType = 0
                  }
                  else{
                    this.setState({userType:1})
                    this.state.userType = 1
                  }
                }}
                />
              </View>

            </View>
            
            
            
          </View>
          
        </View>
        <View style={styles.endOfPage}>
            <TouchableOpacity onPress={() => {
                  console.log(this.state)
                  this.check();
                  }}
                  style={{marginTop:10, width:screenWidth-50, alignSelf:'center'}}
                > 
                    <Text style = {styles.b_buttonType3}>
                        DEVAM
                    </Text>                  
                
            </TouchableOpacity>
          </View>
      </View>
    );
  }
    
}

