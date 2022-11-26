import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../src/style/resident/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const Item = ({ Name, Surname, pid }) => (
    <View style={styles.residentList}>
      <View style={styles.residentListItem}>
          <Text style={styles.residentListText}>{Name} {Surname}</Text>
      </View>
      <View style={styles.residentListItem}>
          <Text style={styles.residentListTextRight}></Text>
      </View>
    </View>
);
const renderItem = ({ item }) => (
  <Item Name={item.Name} Surname={item.Surname} pid = {item.UID} />
);
export default class AnnouncementScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        uid: this.props.route.params.uid,
        Announcement: [],
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
    }
  }
  getAnnouncements = token => {
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
        this.setState({
          Announcements: jsonRes.Announcements
        })
        if (res.status === 200) {
          //How to hook parameters in react native while using class component
          
        }
        console.log(jsonRes)
      } catch (error) {
        console.log(error)
      }
  })
  }
  componentDidMount(){
    this.getAnnouncements();
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
                <Text style={styles.headerText}>Duyuruları Görüntüle</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>
  
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainContentHeaderText}>Emlak Bank Blokları Apartmanı Kat Malikleri</Text>
          <Text style={styles.mainContentHeaderText}>Duyuru Alanı</Text>
  
          <View style={styles.residentListView}>
            <FlatList
            data={this.state.Announcements}
            renderItem={(item) => {
              return(
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('AnnouncementOne', {AnnouncementID:item.item.id, ApartmanName:this.state.ApartmanName});
                }}>
                  <View style={styles.residentList}>
                    <View style={styles.residentListItem}>
                        <Text style={styles.residentListText}>{item.item.AnnouncementHeader}</Text>
                    </View>
                    <View style={styles.residentListItem}>
                        <Text style={styles.residentListTextRight}></Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id}
            style={{backgroundColor:'0049b1'}}
            />
          </View>
        </View>
      </View>
    );
  }
}
    


