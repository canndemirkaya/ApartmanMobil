import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
let screenWidth = Dimensions.get('window').width;
import styles from '../src/style/managerAdd/style'

export default class InspectorAddScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        InspectorName: '',
        InspectorSurname: '',
        InspectorSerial: '',
        InspectorPhone: '',
        reference:'',
        uid: this.props.route.params.uid
    }
  }
  check = () => {
    if(!this.state.InspectorName || !this.state.InspectorSurname || !this.state.InspectorSerial || !this.state.InspectorPhone){
        alert("Tüm alanları doldurunuz.")
    }
    else {
        console.dir(this.state)
        this.InspectorAdd();
    }
  }
  InspectorAdd = token => {
    fetch(`${API_URL}/InspectorAdd`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            "InspectorSerial": this.state.InspectorSerial,
            "InspectorName": this.state.InspectorName,
            "InspectorSurname": this.state.InspectorSurname,
            "InspectorPhone": this.state.InspectorPhone,
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
            const routes = state.routes.filter(r => r.name !== 'InspectorAdd');
            return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
            });
          });
          this.props.navigation.navigate('Inspector');
          
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
                <Text style={styles.headerText}>Denetçi Ekle</Text>
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
                <Text style={styles.textTypeGraySmall}>En fazla 3 adet denetçi eklenebilir, daha çok eklenmek istenirse şu uyarı verilir: 634 sayılı Kanun’un 34’üncü maddesi gereğince yönetim kurulu en çok 3 kişiden oluşabilir. </Text>

                <TextInput 
                placeholder='TCKN'
                style={styles.inputType1}
                keyboardType='number-pad'
                maxLength={11}
                onChangeText={(InspectorSerial) => this.setState({InspectorSerial})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Adı'
                style={styles.inputType1}
                onChangeText={(InspectorName) => this.setState({InspectorName})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Soyadı'
                style={styles.inputType1}
                onChangeText={(InspectorSurname) => this.setState({InspectorSurname})}
                />
              </View>
              <View style={styles.inputBoxInput}>
                <TextInput placeholder='Telefon Numarası'
                style={styles.inputType1}
                onChangeText={(InspectorPhone) => this.setState({InspectorPhone})}
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
        {/* <View style={styles.footer}>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <Ionicons name='md-home-outline' size={30} />
                <Text style={styles.footerText}>Ana Sayfa</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='creditcard' size={30} />
                <Text style={styles.footerText}>Hesap Özeti</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='gift' size={30} />
                <Text style={styles.footerText}>Size Özel</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='bars' size={32} />
                <Text style={styles.footerText}>Diger</Text>
            </View>
            </TouchableOpacity>
        </View> */}
      </View>
    );
  }
    
}

