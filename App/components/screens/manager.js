import React, { useState, Component } from 'react';
import { View, Text, Input, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import filter from 'lodash.filter'
import styles from '../src/style/resident/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

export default class InspectorScreen extends Component {
  constructor(props){
    super(props);
  }
  state = {
    isLoading: true,
    loggedIn: false,
    uid: this.props.route.params.uid,
    managers: [],
    query: '',
    loading: false,
    data: [],
    ApartmanName:this.props.route.params.ApartmanName,
    ApartmanCode:this.props.route.params.ApartmanCode,
  }
  componentDidMount(){
    this.getManagers();
  }
  getManagers = token => {
    fetch(`${API_URL}/GetManagers`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "UID": this.state.uid,
      })
  }).then(async res => {
    console.log(res)
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
            this.setState({
              managers: jsonRes.managers
            })
        }
        console.log(jsonRes)
      } catch (error) {
        console.log(error)
      }
  })}
  
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
                <Text style={styles.headerText}>Yöneticileri Görüntüle</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainContentHeaderText}>Emlak Bank Blokları Apartmanı Kat Malikleri</Text>

          <View style={styles.residentListView}>
            <FlatList
            data={this.state.managers}
            renderItem={(item) => {
              console.log(item.item)
              return(
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('ResidentOne', {pid:item.item.UID});
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

