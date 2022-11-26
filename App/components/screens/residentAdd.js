import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
import { CommonActions } from '@react-navigation/native';




let screenWidth = Dimensions.get('window').width;

import styles from '../src/style/managerAdd/style'

export default class ResidentAddScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        residentName: '',
        residentSurname: '',
        residentSerial: '',
        residentPhone: '',
        residentBlok: '',
        residentFloor: '',
        residentFlat: '',
        reference:'',
        uid: this.props.route.params.uid,
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
    }
  }
  check = () => {
    if(!this.state.residentName || !this.state.residentSurname || !this.state.residentSerial || !this.state.residentPhone){
        alert("Tüm alanları doldurunuz.")
    }
    else {
        console.dir(this.state)
        this.residentAdd();
    }
  }
  residentAdd = token => {
    fetch(`${API_URL}/residentAdd`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            "residentSerial": this.state.residentSerial,
            "residentName": this.state.residentName,
            "residentSurname": this.state.residentSurname,
            "residentPhone": this.state.residentPhone,
            "reference": this.state.uid,
            "residentBlok": this.state.residentBlok,
            "residentFloor": this.state.residentFloor,
            "residentFlat": this.state.residentFlat,

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
            const routes = state.routes.filter(r => r.name !== 'ResidentAdd');
            return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
            });
          });
          this.props.navigation.navigate('Resident', {uid:this.props.route.params.uid});
          
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
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.goBack()
              }}>
                    <Text style={styles.headerLeftText}><Ionicons name='chevron-back' size={25}  /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headerMiddle}>
                <Text style={styles.headerText}>Kat Malikleri Görüntüle</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={{flex:0.92, alignItems:'center'}}>
            
        <View style={styles.inputBoxView}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxInput}>

                <TextInput 
                placeholder='TCKN'
                style={styles.inputType1}
                keyboardType='number-pad'
                maxLength={11}
                onChangeText={(residentSerial) => this.setState({residentSerial})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Adı'
                style={styles.inputType1}
                onChangeText={(residentName) => this.setState({residentName})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Soyadı'
                style={styles.inputType1}
                onChangeText={(residentSurname) => this.setState({residentSurname})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Telefon Numarası'
                style={styles.inputType1}
                onChangeText={(residentPhone) => this.setState({residentPhone})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Blok'
                style={styles.inputType1}
                onChangeText={(residentBlok) => this.setState({residentBlok})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Kat'
                style={styles.inputType1}
                onChangeText={(residentFloor) => this.setState({residentFloor})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Daire'
                style={styles.inputType1}
                onChangeText={(residentFlat) => this.setState({residentFlat})}
                />
              </View>
            </View>
            
            <View style={styles.endOfPage}>
            <TouchableOpacity onPress={() => {
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
            
        </View>
      </View>
    );
  }
    
}

