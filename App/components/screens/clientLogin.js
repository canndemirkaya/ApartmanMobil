import React, { useState, Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput,
   Alert, Dimensions, ListViewBase } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
import styles from '../src/style/clientLogin/style'


export default class ClientScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        username: '',
        password: '',
          
    }
  }
  validate = token => {
    fetch(`${API_URL}/login`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            "username": this.state.username,
            "password": this.state.password
        })
    }).then(async res => {
        const jsonRes = await res.json();
        try {
            if (res.status === 401) {
                this.state.password=null;
                this.setState({password:null});
                alert("Şifre yanlış...")
            }
            else if (res.status === 404) {
                this.state.username=null;
                this.state.password=null;
                this.setState({username:null,password:null});
                alert("Kullanıcı ismi yanlış...")

            }
            else if (res.status === 200) {

                if(jsonRes.user.UserType == 1){
                  await this.props.navigation.navigate('Home', {username:jsonRes.user.Name + ' ' + jsonRes.user.Surname, ApartmanName: jsonRes.user.ApartmanName})
                }
                else{
                  await this.props.navigation.navigate('ManagerHome', 
                  {username:jsonRes.user.Name + ' ' + jsonRes.user.Surname, uid: jsonRes.user.UID, 
                  ApartmanName: jsonRes.user.ApartmanName, ApartmanCode: jsonRes.user.ApartmanCode})
                }
            }
        } catch (error) {
            alert(`Bir hata ile karşılaşıldı. \n ${error}`)
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
            <Text style={styles.textTypeWhiteHeader}>Giriş</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.inputBoxView}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxInput}>
                <Text style={styles.textTypeGraySmall}>Artık kimlik numaranızla da giriş yapabilirsiniz.</Text>
                <TextInput 
                placeholder='Müşteri Numarası / TCKN'
                style={styles.inputType1}
                keyboardType='number-pad'
                onChangeText={(username) => this.setState({username})}
                maxLength={11}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Şifre'
                style={styles.inputType1}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
              </View>
              <View style={styles.viewCenter}>
                <Text style={styles.textTypeGraySmall}>Yapabileceğiniz diğer işlemler</Text>
                <View style={styles.row}>
                  <View style={styles.halfInRow}>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={() => {
                      this.props.navigation.navigate('Register')
                    }}>
                      <EvilIcons name='arrow-left' size={35} color='#0049b1'/>
                      <Text style={styles.textTypeGraySmallCenter}>Kayıt Olmak</Text>
                      <Text style={styles.textTypeGraySmallCenter}>İstiyorum!</Text>

                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{alignItems:'center', width:'50%'}}>
                      <EvilIcons name='arrow-left' size={35} color='#0049b1'/>
                      <Text style={styles.textTypeGraySmallCenter}>Yeni Şifre Alın!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            
            
            
          </View>
          
        </View>
        <View style={styles.endOfPage}>
            <TouchableOpacity onPress={() => {
                  console.log(this.state.password,this.state.username)
                  this.validate();
                  if(this.state.passConfirm == this.state.password){
                    if(this.state.username == this.state.userConfirm){
                      this.props.navigation.navigate('Home')
                    }}
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

