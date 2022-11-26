import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
let screenWidth = Dimensions.get('window').width;
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
import styles from '../src/style/managerAdd/style'

export default class ManagerAddScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        ManagerName: '',
        ManagerSurname: '',
        ManagerSerial: '',
        ManagerPhone: '',
        reference:'',
        uid: this.props.route.params.uid,
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
    }
  }
  check = () => {
    if(!this.state.ManagerName || !this.state.ManagerSurname || !this.state.ManagerSerial || !this.state.ManagerPhone){
        alert("Tüm alanları doldurunuz.")
    }
    else {
        console.dir(this.state)
        this.ManagerAdd();
    }
  }
  ManagerAdd = token => {
    fetch(`${API_URL}/ManagerAdd`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            "ManagerSerial": this.state.ManagerSerial,
            "ManagerName": this.state.ManagerName,
            "ManagerSurname": this.state.ManagerSurname,
            "ManagerPhone": this.state.ManagerPhone,
            "reference": this.state.uid
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
            const routes = state.routes.filter(r => r.name !== 'ManagerAdd');
            return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
            });
          });
          this.props.navigation.navigate('Manager');
          
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
                <Text style={styles.headerText}>Yönetici Ekle</Text>
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
              {/* <View style={styles.inputBoxText}>
              </View> */}
              <View style={styles.inputBoxInput}>
              <Text style={styles.textTypeGraySmall}>En fazla 3 adet yönetici eklenebilir, daha çok eklenmek istenirse şu uyarı verilir: 634 sayılı Kanun’un 34’üncü maddesi gereğince yönetim kurulu en çok 3 kişiden oluşabilir. </Text>

                <TextInput 
                placeholder='TCKN'
                style={styles.inputType1}
                keyboardType='number-pad'
                maxLength={11}
                onChangeText={(ManagerSerial) => this.setState({ManagerSerial})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Adı'
                style={styles.inputType1}
                onChangeText={(ManagerName) => this.setState({ManagerName})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Soyadı'
                style={styles.inputType1}
                onChangeText={(ManagerSurname) => this.setState({ManagerSurname})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Telefon Numarası'
                style={styles.inputType1}
                onChangeText={(ManagerPhone) => this.setState({ManagerPhone})}
                />
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
            
        </View>
      </View>
    );
  }
    
}

