import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
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
export default class ResidentScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        uid: this.props.route.params.uid,
        residents: [],
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
    }
  }
  getResidents = token => {
    fetch(`${API_URL}/GetResidents`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "UID": this.props.route.params.uid,
      })
  }).then(async res => {
    console.log(res)
      try {
        const jsonRes = await res.json();
        this.setState({
          residents: jsonRes.residents
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
    this.getResidents();
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
        <View style={styles.mainContent}>
          <Text style={styles.mainContentHeaderText}>{this.state.ApartmanName} Kat Malikleri</Text>
  
          <View style={styles.residentListView}>
            <FlatList
            data={this.state.residents}
            renderItem={(item) => {
              return(
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('ResidentOne', {pid:item.item.UID, ApartmanName:this.state.ApartmanName, ApartmanCode:this.state.ApartmanCode});
                }}>
                  <View style={styles.residentList}>
                    <View style={styles.residentListItem}>
                        <Text style={styles.residentListText}>{item.item.Name} {item.item.Surname}</Text>
                    </View>
                    <View style={styles.residentListItem}>
                        <Text style={styles.residentListTextRight}></Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.UID}
            style={{backgroundColor:'0049b1'}}
            />
          </View>
        </View>
      </View>
    );
  }
}
    


