import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList } from 'react-native';
let screenWidth = Dimensions.get('window').width;
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../src/style/resident/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

export default class SurveyOneScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        uid: this.props.route.params.uid,
        SurveyID: this.props.route.params.SurveyID,
        SurveyHeader: '',
        SurveyLink: '',
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
    }
  }
  getSurvey = token => {
    fetch(`${API_URL}/GetSurvey`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "SurveyID": this.state.SurveyID,
      })
  }).then(async res => {
      try {
        console.log(res)
        const jsonRes = await res.json();
        if (res.status === 200) {
          this.setState({
            SurveyHeader:jsonRes.Survey[0].SurveyHeader,
            SurveyLink:jsonRes.Survey[0].SurveyLink
          })
        }
        console.log(jsonRes.resident[0], this.state)
      } catch (error) {
        console.log(error)
      }
  })
  }
  componentDidMount(){
    this.getSurvey();
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
                <Text style={styles.headerText}>Anketleri Görüntüle</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainContentHeaderText}>{this.state.ApartmanName} </Text>
          <View style={styles.residentListView}>
              <Text>ID: 000{this.state.SurveyID}</Text>
          </View>
          <View style={styles.residentListView}>
              <Text>Anket Başlığı: {this.state.SurveyHeader}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Anket Linki: {this.state.SurveyLink}</Text>
          </View>
          <View style={styles.endOfPage}>
            {/* <TouchableOpacity 
                  style={{marginTop:10, width:screenWidth-50, alignSelf:'center'}}
                > 
                    <Text style = {styles.b_buttonType3}>
                        DEVAM
                    </Text>                  
                
            </TouchableOpacity>
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
                
            </TouchableOpacity> */}
            
          </View>
        </View>
      </View>
    );
  }
  
}

