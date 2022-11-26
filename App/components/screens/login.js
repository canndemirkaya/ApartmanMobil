import React, { useState, Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../src/style/login/logintemplate'
export default class LoginScreen extends Component {
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
            <View style={styles.v_headerText}>
                <Text style={styles.headerText}>ApartmanMobil</Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.v_main}>
                <FontAwesome name="user-circle-o" size={50} style={styles.mainIconUser}/>
                <Text style={styles.t_mainTextType1}>Yeni Kullanıcı</Text>
              <Text style={styles.t_mainTextType2}>Farklı bir kullanıcı ile oturum açın</Text>
              <View style={styles.v_dots}>
               
              </View>
              <View style={styles.v_buttons}>
                <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.navigate('Client')
                }}
                > 
                  <Text style = {styles.b_buttonType1}>
                    Bireysel Giriş
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => {
                  // this.props.navigation.navigate('Register')
                }}> 
                  <Text style = {{fontSize:17, color:'#fff', marginTop:10}}> ApartmanMobil'e kayıt olmak için 
                    <Text style = {{fontSize:18, color:'#0049b1', fontWeight:'bold'}}> tıklayın!</Text>
                  </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.v_news}>
            <Text style={styles.t_version}>v.221710</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
    
}

