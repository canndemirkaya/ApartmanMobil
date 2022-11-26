import React, { useState, Component } from 'react';
import { View, Text, Modal, Button, Image, ScrollView, Pressable, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
let screenWidth = Dimensions.get('window').width;
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

import styles from '../src/style/managerHome/style'
export default class ManagerTabScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: true,
        username: this.props.route.params.username,
        uid: this.props.route.params.uid,
        ApartmanName:this.props.route.params.ApartmanName,
        ApartmanCode:this.props.route.params.ApartmanCode,
        modalVisible: false,
        modalVisibleforSurvey: false,
        modalVisibleforAnnouncement: false,
        SurveyHeader: '',
        SurveyLink: '',
        AnnouncementHeader: '',
        AnnouncementContent: '',
        dues:'',
        DuesValue:''
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisibleforSurvey = (visible) => {
    this.setState({ modalVisibleforSurvey: visible });
  }
  setModalVisibleforAnnouncement = (visible) => {
    this.setState({ modalVisibleforAnnouncement: visible });
  }
  GetDueValue = token => {
    fetch(`${API_URL}/GetDueValue`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "ApartmanCode": this.state.ApartmanCode,
          "UID": this.state.uid,

      })
  }).then(async result => {
    const jsonRes = await result.json();
    console.log(jsonRes.DueValue[0].DuesValue)
      try {
        if (result.status === 201) {
            this.setState({dues:jsonRes.DueValue[0].DuesValue})
            this.state.dues = jsonRes.DueValue[0].DuesValue
        }
      } catch (error) {
        console.log(error)
      }
  })
}
  InsertDueValuetoAll = token => {
    console.log('how to do you work')
    fetch(`${API_URL}/InsertDueValuetoAll`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "ApartmanCode": this.state.ApartmanCode,
          "DuesValue": this.state.DuesValue,
          "UID": this.state.uid,

      })
  }).then(async res => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
            console.log('girdim')
            this.setState({DuesValue:''})
            this.setModalVisible(!this.state.modalVisible);
            Alert.alert(`${this.state.ApartmanName}'nındaki tüm maliklerin aidatları güncellendi.`)
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  InsertSurvey = token => {
    fetch(`${API_URL}/InsertSurvey`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "ApartmanCode": this.state.ApartmanCode,
          "UID": this.state.uid,
          "SurveyHeader": this.state.SurveyHeader,
          "SurveyLink": this.state.SurveyLink
      })
  }).then(async res => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
            console.log('girdim')
            this.setState({SurveyHeader:'', SurveyLink: ''})
            this.setModalVisibleforSurvey(!this.state.modalVisibleforSurvey);
            Alert.alert(`Anket başarıyla eklendi`)
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  InsertAnnouncement = token => {
    fetch(`${API_URL}/InsertAnnouncement`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          "ApartmanCode": this.state.ApartmanCode,
          "UID": this.state.uid,
          "AnnouncementHeader": this.state.AnnouncementHeader,
          "AnnouncementContent": this.state.AnnouncementContent
      })
  }).then(async res => {
    console.log(res)
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
            console.log('girdim')
            this.setState({AnnouncementHeader:'', AnnouncementContent: ''})
            this.setModalVisibleforAnnouncement(!this.state.modalVisibleforAnnouncement);
            Alert.alert(`Duyuru başarıyla eklendi`)
        }
      } catch (error) {
        console.log(error)
      }
  })
  }
  componentDidMount(){
    // this.getResidents();
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centeredView}>
            {/* MODAL FOR DUES */}
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
                <View style={styles.modalRowView}>
                    <Text style={styles.textStyle2}>Şu anki aidat tutarı: {this.state.dues}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textStyle2}>Aidat tutarı: </Text>
                    <TextInput
                    placeholder='giriniz...'
                    style={styles.inputType1}
                    onChangeText={(DuesValue) => this.setState({DuesValue})}
                    />
                </View>
                
                <View style={{flexDirection:'row'}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.InsertDueValuetoAll()}
                >
                    <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.textStyleSmall}>Bilgi: Burada yapacağınız güncelleme tüm apartmandaki kişilerin aidat tutarını güncelleyecektir.</Text>

                </View>
                </View>
            </View>
            </Modal>
            {/* modal 2 FOR SURVEY */} 
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisibleforSurvey}
            onRequestClose={() => {
                this.setModalVisibleforSurvey(!this.state.modalVisibleforSurvey);
                
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.modalRowView}>
                    <Text style={styles.textStyle2}>Anket başlığı: </Text>

                    <TextInput
                    placeholder='giriniz'
                    style={styles.inputTypeforSurvey}
                    onChangeText={(SurveyHeader) => this.setState({SurveyHeader})}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textStyle2}>Anket linkini: </Text>

                    <TextInput
                    placeholder='giriniz'
                    style={styles.inputTypeforSurvey}
                    onChangeText={(SurveyLink) => this.setState({SurveyLink})}
                    />
                </View>
                
                <View style={{flexDirection:'row'}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.InsertSurvey()}
                >
                    <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisibleforSurvey(!this.state.modalVisibleforSurvey)}
                >
                    <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.textStyleSmall}>Bilgi: Kısa süre sonrasında anketinizi uygulama içinden oluşturabileceksiniz.</Text>

                </View>
                </View>
            </View>
            </Modal>
            {/* modal 3 for announcement */}
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisibleforAnnouncement}
            onRequestClose={() => {
                this.setModalVisibleforAnnouncement(!this.state.modalVisibleforAnnouncement);
                
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.modalRowView}>
                    <Text style={styles.textStyle2}>Duyuru başlığı: </Text>

                    <TextInput
                    placeholder='giriniz'
                    style={styles.inputTypeforSurvey}
                    onChangeText={(AnnouncementHeader) => this.setState({AnnouncementHeader})}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textStyle2}>Duyuru içeriği: </Text>

                    <TextInput
                    placeholder='giriniz'
                    style={styles.inputTypeforSurvey}
                    onChangeText={(AnnouncementContent) => this.setState({AnnouncementContent})}
                    />
                </View>
                
                <View style={{flexDirection:'row'}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.InsertAnnouncement()}
                >
                    <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisibleforAnnouncement(!this.state.modalVisibleforAnnouncement)}
                >
                    <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={styles.textStyleSmall}>Bilgi: Duyurular giriş sayfalarında gözükür.</Text>

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
                <Text style={styles.headerText}>ApartmanMobil Yönetici</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                <FontAwesome name='bell' size={25} style={styles.headerIconRight}/>
                </TouchableOpacity>
            </View>

        </View>
        <View style={{flex:0.92, alignItems:'center'}}> 
            <View style={styles.tabRow}>
                <Text style={styles.ApartmanHeader}>{this.state.ApartmanName} - {this.state.ApartmanCode} -</Text>
            </View>
            <View style={styles.tabRow}>
                <Text style={styles.ApartmanText}>Hint: ApartmanMobil şu an test aşamasındadır.</Text>
            </View>
            <View style={styles.tabScrollView}>
                <ScrollView
                    horizontal={false}
                    pagingEnabled={false}
                    showsVerticalScrollIndicator={false}
                    >
                    <View style={styles.tabRow}>
                        <TouchableOpacity onPress={ () => {
                                            this.props.navigation.navigate('ResidentAdd', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Kat Maliklerini Ekle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => {
                            this.props.navigation.navigate('Resident', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Kat Maliklerini Görüntüle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabRow}>
                        <TouchableOpacity onPress={ () => {
                                            this.props.navigation.navigate('InspectorAdd', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Denetçileri Ekle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => {
                                            this.props.navigation.navigate('Inspector', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Denetçileri Görüntüle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabRow}>
                        <TouchableOpacity onPress={ () => {
                                            this.props.navigation.navigate('ManagerAdd', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Apartman Yöneticilerini Ekle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => {
                                            this.props.navigation.navigate('Manager', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode});
                                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Apartman Yöneticilerini Görüntüle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabRow}>
                        <TouchableOpacity onPress={() => {
                            this.GetDueValue();
                            this.setModalVisible(true)
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Aidatları Düzenle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisibleforAnnouncement(true)
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Duyuru -bülten- Ekle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabRow}>
                        <TouchableOpacity 
                        onPress={() => {
                            this.props.navigation.navigate('Announcement', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName,ApartmanCode: this.state.ApartmanCode});
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Tüm Duyuruları Görüntüle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisibleforSurvey(true)
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Anket Oluştur</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabRow}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Survey', {uid:this.props.route.params.uid, ApartmanName: this.state.ApartmanName,ApartmanCode: this.state.ApartmanCode});
                        }}>
                            <View style={styles.tabItems}>
                                <Text style={styles.tabTextHeader}>Anketleri Görüntüle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='creditcard' size={30} />
                <Text style={styles.footerText}>Yönetici</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                this.props.navigation.navigate('ManagerHome', 
                  {username:this.state.username, uid: this.state.uid, 
                  ApartmanName: this.state.ApartmanName, ApartmanCode: this.state.ApartmanCode})
            }}>
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

