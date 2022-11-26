import React, { useState, Component } from 'react';
import { View, Text, FlatList, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
import styles from '../src/style/managerHome/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

export default class ManagerHomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: true,
        username: this.props.route.params.username,
        uid: this.props.route.params.uid,
        ApartmanName:this.props.route.params.ApartmanName + ' Apartmanı',
        ApartmanCode:this.props.route.params.ApartmanCode,
        Announcements: []
    }
  }
  GetAnnouncements = token => {
    fetch(`${API_URL}/GetAnnouncements`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "ApartmanCode": this.props.route.params.ApartmanCode,
      })
  }).then(async res => {
    console.log(res)
      try {
        const jsonRes = await res.json();
        
        if (res.status === 200) {
          //How to hook parameters in react native while using class component
          this.setState({
            Announcements: jsonRes.Announcements
          })
        }
        console.log(jsonRes)
      } catch (error) {
        console.log(error)
      }
  })
  }
  componentDidMount(){
    this.GetAnnouncements();
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
                <Text style={styles.headerText}>ApartmanMobil Yönetici</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.mainView}> 
            <View style={{flex:0.4, alignItems:'center', paddingTop:30}}>
                <View style={styles.userCard}>
                        <View style={styles.v_userCardHeader}>
                            <View style={styles.v_userCardHeaderFont}>
                                <Text style={styles.userTextType1}>{this.state.username}</Text>
                                <Text style={styles.userTextType2}>{this.state.ApartmanName}</Text>
                            </View>
                            <View style={styles.userCardHeaderIcon}>
                                <TouchableOpacity>
                                    <FontAwesome name='user-circle' size={35} color='#fff'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.userCardMain}>
                            <Text style={styles.userTextType2}>Yönetici - {this.state.ApartmanName}</Text>
                            
                        </View>
                        <View style={{marginLeft:20, flexDirection:'row', width:screenWidth-50}}>
                            <View style={{width:(screenWidth-50)/2}}>
                                <Text style={styles.userTextType1}></Text>
                            </View>
                        </View>
                </View>
            </View>
            <View style={{flex:0.1}}></View>
            <View style={styles.managerMainView}>
                <View style={styles.shorcutView}>
                    <Text style={{paddingTop:0}}>Hızlı Erişim</Text>
                        <View style={styles.rowUnsetMarginLeft}>
                            <ScrollView
                            horizontal={true}
                            pagingEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.favoriCardType2}>
                                    <TouchableOpacity onPress={ () => {
                                        this.props.navigation.navigate('Manager', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                    }}>
                                        <Text>Yönetici - Apartman</Text>
                                        <Text style={styles.fontTypeBlackBigBold}>Apartman Yöneticilerini Görüntüle</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.favoriCardType2}>
                                    <TouchableOpacity onPress={ () => {
                                        this.props.navigation.navigate('Inspector', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                    }}>
                                        <Text>Denetçi - Apartman</Text>
                                        <Text style={styles.fontTypeBlackBigBold}>Denetçileri Görüntüle</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.favoriCardType2}>
                                    <TouchableOpacity onPress={ () => {
                                        this.props.navigation.navigate('Resident', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                    }}>
                                        <Text>Kat Maliki - Apartman</Text>
                                        <Text style={styles.fontTypeBlackBigBold}>Kat Maliklerini Görüntüle</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                </View>
                <View style={{ alignItems:'center', marginTop:20}}>
                <Text>{this.state.ApartmanName} Duyuruları</Text>
                <View style={styles.rowUnsetMarginLeft}>
                    <FlatList
                        data={this.state.Announcements}
                        horizontal={true}
                        renderItem={(item) => {
                        return(
                            <View style={styles.favoriCard}>
                                <TouchableOpacity>
                                    <Image source={require('../src/img/duyuru.jpg')} style={styles.duyuruimg} />
                                    <View style={{marginTop:3}}>
                                    <Text  numberOfLines={2} ellipsizeMode="tail"
                                    style={styles.fontTypeBlackBold}>{item.item.AnnouncementHeader} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                        }}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        style={{backgroundColor:'0049b1'}}
                        />
                </View>
                </View>
            </View>
            
            
            
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ManagerTab', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
            }}>
            <View style={styles.footerItem}>
                <AntDesign name='creditcard' size={30} />
                <Text style={styles.footerText}>Yönetici</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <Ionicons name='md-home-outline' size={30} />
                <Text style={styles.footerText}>Ana Sayfa</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='gift' size={30} />
                <Text style={styles.footerText}>Size Özel</Text> 
            </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
    
}

