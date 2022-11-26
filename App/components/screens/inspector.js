import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../src/style/resident/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const Item = ({ Name, Surname }) => (
  <TouchableOpacity>
    <View style={styles.residentList}>
    
      <View style={styles.residentListItem}>
          <Text style={styles.residentListText}>{Name} {Surname}</Text>
      </View>
      <View style={styles.residentListItem}>
          <Text style={styles.residentListTextRight}></Text>
      </View>

    {/* <View style={styles.residentListItem}>
      <Text style={styles.residentListText}>Düzenle</Text>
    </View> */}
    </View>
  </TouchableOpacity>

);
const renderItem = ({ item }) => (
  <Item Name={item.Name} Surname={item.Surname} />
);
export default class InspectorScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        uid: this.props.route.params.uid,
        inspectors: []
    }
  }
  getInspectors = token => {
    fetch(`${API_URL}/GetInspectors`, {
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
        if (res.status === 200) {
            this.setState({
                inspectors: jsonRes.inspectors
              })
        }
        console.log(jsonRes)
      } catch (error) {
        console.log(error)
      }
  })
  }
  componentDidMount(){
    this.getInspectors();
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
                <Text style={styles.headerText}>Denetleyicileri Görüntüle</Text>
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
            data={this.state.inspectors}
            renderItem={(item) => {
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

