import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput,
  FlatList, Modal, Pressable } from 'react-native';
let screenWidth = Dimensions.get('window').width;
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../src/style/resident/style'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

export default class ResidentOneScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        uid: this.props.route.params.uid,
        pid: this.props.route.params.pid,
        ResidentUID: '',
        ResidentName: '',
        ResidentSurname: '',
        ResidentPhone: '',
        ResidentBlok: '',
        ResidentFloor: '',
        ResidentFlat: '',
        DuesValue: '',
        NewResidentSerialNumber: '',
        NewResidentName: '',
        NewResidentSurname: '',
        NewResidentPhone: '',
        NewResidentBlok: '',
        NewResidentFloor: '',
        NewResidentFlat: '',
        resident: [],
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
        modalVisible: false,
        modalVisibleforDuesModal: false,
        dues: ''

    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisibleforDuesModal = (visible) => {
    this.setState({ modalVisibleforDuesModal: visible });
  }
  InsertDueValue = token => {
    fetch(`${API_URL}/InsertDueValue`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "DuesValue": this.state.dues,
          "UID": this.state.ResidentUID,

      })
  }).then(async resultDues => {
      try {
        const jsonRes = await resultDues.json();
        if (resultDues.status === 200) {
            this.setState({dues:''})
            this.setModalVisibleforDuesModal(!this.state.modalVisibleforDuesModal);
            this.getResident()
            Alert.alert(`Başarıyla yapıldı.`)
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  UpdateResident = token => {
    fetch(`${API_URL}/UpdateResident`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "UID": this.state.ResidentUID,
          "ResidentSerialNumber": this.state.NewResidentSerialNumber === '' ? this.state.ResidentSerialNumber : this.state.NewResidentSerialNumber ,
          "ResidentName": this.state.NewResidentName === '' ? this.state.ResidentName : this.state.NewResidentName ,
          "ResidentSurname": this.state.NewResidentSurname === '' ? this.state.ResidentSurname : this.state.NewResidentSurname ,
          "ResidentPhone": this.state.NewResidentPhone === '' ? this.state.ResidentPhone : this.state.NewResidentPhone ,
          "ResidentBlok": this.state.NewResidentBlok === '' ? this.state.ResidentBlok : this.state.NewResidentBlok ,
          "ResidentFloor": this.state.NewResidentFloor === '' ? this.state.ResidentFloor : this.state.NewResidentFloor ,
          "ResidentFlat": this.state.NewResidentFlat === '' ? this.state.ResidentFlat : this.state.NewResidentFlat
      })
  }).then(async res => {
      try {
        console.log(res)
        const jsonRes = await res.json();
        if (res.status === 200) {
          this.setState({
            NewResidentSerialNumber: '',
            NewResidentName: '',
            NewResidentSurname: '',
            NewResidentPhone: '',
            NewResidentBlok: '',
            NewResidentFloor: '',
            NewResidentFlat: '',
          })
          this.setModalVisible(!this.state.modalVisible);
          Alert.alert('Başarıyla güncellendi.')
          this.props.navigation.navigate('Resident', {uid:this.state.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  getResident = token => {
    fetch(`${API_URL}/GetResident`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "PID": this.state.pid,
      })
  }).then(async res => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
          this.setState({
            resident: jsonRes.resident,
            ResidentUID: jsonRes.resident[0].UID,
            ResidentSerialNumber: jsonRes.resident[0].SerialNumber,
            ResidentName: jsonRes.resident[0].Name,
            ResidentSurname: jsonRes.resident[0].Surname,
            ResidentPhone: jsonRes.resident[0].PhoneNumber,
            ResidentBlok: jsonRes.resident[0].Blok,
            ResidentFloor: jsonRes.resident[0].Floor,
            ResidentFlat: jsonRes.resident[0].Flat,
            DuesValue: jsonRes.resident[0].DuesValue
          })
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  
  componentDidMount(){
    this.getResident();
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centeredView}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>TC: </Text>
                      <TextInput
                      placeholder={this.state.ResidentSerialNumber}
                      style={styles.inputType1}
                      onChangeText={(ResidentSerialNumber) => this.setState({ResidentSerialNumber})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>İsim: </Text>

                      <TextInput
                      placeholder={this.state.ResidentName}
                      style={styles.inputType1}
                      onChangeText={(NewResidentName) => this.setState({NewResidentName})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>Soyisim: </Text>

                      <TextInput
                      placeholder={this.state.ResidentSurname}
                      style={styles.inputType1}
                      onChangeText={(NewResidentSurname) => this.setState({NewResidentSurname})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>Telefon: </Text>

                      <TextInput
                      placeholder={this.state.ResidentPhone}
                      style={styles.inputType1}
                      onChangeText={(NewResidentPhone) => this.setState({NewResidentPhone})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>Blok: </Text>

                      <TextInput
                      placeholder={this.state.ResidentBlok}
                      style={styles.inputType1}
                      onChangeText={(NewResidentBlok) => this.setState({NewResidentBlok})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>Kat: </Text>

                      <TextInput
                      placeholder={this.state.ResidentFloor.toString()}
                      style={styles.inputType1}
                      onChangeText={(NewResidentFloor) => this.setState({NewResidentFloor})}
                      />
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.textStyle2}>Daire: </Text>

                      <TextInput
                      placeholder={this.state.ResidentFlat.toString()}
                      style={styles.inputType1}
                      onChangeText={(NewResidentFlat) => this.setState({NewResidentFlat})}
                      />
                  </View>
                <View style={{flexDirection:'row'}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.UpdateResident()}
                >
                    <Text style={styles.textStyle}>Güncelle</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.textStyleSmall}>Bilgi: Değiştirmek istediğiniz alanı değiştirip güncelleye basın.</Text>

                </View>
                </View>
            </View>
            </Modal>
            {/* modal for dues popup */}
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisibleforDuesModal}
            onRequestClose={() => {
                this.setModalVisibleforDuesModal(!this.state.modalVisibleforDuesModal);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalViewforDuesModal}>
                <View style={styles.modalRowView}>
                    <Text style={styles.textStyle2}>Şu anki aidat tutarı: {this.state.DuesValue}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textStyle2}>Aidat tutarı: </Text>

                    <TextInput
                    placeholder='giriniz...'
                    style={styles.inputType1}
                    value={this.state.dues}
                    onChangeText={(dues) => this.setState({dues})}
                    />
                </View>
                
                <View style={{flexDirection:'row'}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      console.log(this.state.uid)
                      this.InsertDueValue()
                    }}
                >
                    <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisibleforDuesModal(!this.state.modalVisibleforDuesModal)}
                >
                    <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.textStyleSmall}>Bilgi: Burada yapacağınız güncelleme sadece bu kişinin aidat tutarını güncelleyecektir.</Text>
                </View>
                </View>
            </View>
            </Modal>
          </View>
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
          <Text style={styles.mainContentHeaderText}>{this.state.ApartmanName}</Text>
          <View style={styles.residentListView}>
              <Text>ID: 000{this.state.ResidentUID}</Text>
          </View>
          <View style={styles.residentListView}>
              <Text>TC: {this.state.ResidentSerialNumber}</Text>
          </View>
          
          <View style={styles.residentListView}>
              <Text>İsim: {this.state.ResidentName}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Soyisim: {this.state.ResidentSurname}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Telefon: {this.state.ResidentPhone}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Blok/Kat/Daire : {this.state.ResidentBlok} / {this.state.ResidentFloor} / {this.state.ResidentFlat}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Aidat Ödeme Durumu: Normal</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Aidat Borcu: {this.state.DuesValue}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Toplam Aidat Borcu: {this.state.DuesValue}</Text>
          </View>
          <View style={styles.residentListView}>
            <Text>Son Ödeme Tarihi: 30.11.2022</Text>
          </View>
          <View style={styles.endOfPage}>
            <TouchableOpacity onPress={() => {
              this.setModalVisibleforDuesModal(true)
            }}
            style={{marginTop:10, width:screenWidth-50, alignSelf:'center'}}
            > 
              <Text style = {styles.b_buttonType3}>
                Aidat Düzenle
              </Text>                                      
            </TouchableOpacity>
          </View>
          <View style={styles.endOfPage}>
            <TouchableOpacity onPress={() => {
              this.setModalVisible(true)
            }}
            style={{marginTop:10, width:screenWidth-50, alignSelf:'center'}}
            > 
              <Text style = {styles.b_buttonType3}>
                Kat Maliki Bilgilerini Düzenle
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
        </View>
      </View>
    );
  }
  
}

