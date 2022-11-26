import React, { useState, Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

import styles from '../src/style/clientHome/style'

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        loggedIn: false,
        username: this.props.route.params.username,
        ApartmanName:this.props.route.params.ApartmanName,
    }
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
        <View style={{flex:0.92, alignItems:'center'}}>
            <View style={styles.v_userCard}>
                <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                >
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
                        <Text style={styles.userTextType2}>Borcunuz</Text>
                    </View>
                    <View style={{marginLeft:20, flexDirection:'row', width:screenWidth-50}}>
                        <View style={{width:(screenWidth-50)/2}}>
                            <Text style={styles.userTextType1}>500.00 TL</Text>
                        </View>
                        <View style={{width:(screenWidth-50)/2, justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <TouchableOpacity onPress={() => {}}>
                                <Text style = {styles.buttonType1}>
                                    Ödeme Yap</Text>                   
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
            <View style={styles.v_secondView}>
                <View style={{alignItems:'center'}}>
                    <Fontisto name='minus-a' size={30} color='#c1bdb8'/>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.viewTypeLeft}>
                        <Text style={styles.fontTypeBlackBold}>Hızlı Erişim</Text>
                    </View>
                </View>
                <View style={styles.rowUnsetMarginLeft}>
                    <ScrollView
                    horizontal={true}
                    pagingEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.favoriCard}>
                            <TouchableOpacity>
                                <Text>Ödeme Yap - Fatura</Text>
                                <Text style={styles.fontTypeBlackBold}>Anında Fatura Öde</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.favoriCard}>
                            <TouchableOpacity>
                                <Text>Talimat Ver - Fatura</Text>
                                <Text style={styles.fontTypeBlackBold}>Talimat Ver</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.favoriCard}>
                            <TouchableOpacity>
                                <Text>Ödeme Yap - Fatura</Text>
                                <Text style={styles.fontTypeBlackBold}>Anında Fatura Öde</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.row}>
                    <View style={styles.viewTypeLeft}>
                        <Text style={styles.fontTypeBlackBold}>Yaklaşan Ödemelerim</Text>
                    </View>
                    <View style={styles.viewTypeRight}>
                        <TouchableOpacity>
                            <Text style={styles.fontTypeBlueBold}>Tümü</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.viewNotice}>
                    <View style={styles.viewNoticeItem}>
                        <View style={styles.viewNoticeIcon}>
                            <AntDesign name='creditcard' size={30} color='#0049b1'/>
                        </View>
                        <View style={styles.viewNoticeInfoHalf}>
                            <Text style={styles.fontTypeBlackBold}>Aidat</Text>
                            <Text style={styles.fontTypeGraySmall}>30 / 11 / 2022</Text>
                        </View>
                        <View style={{justifyContent:'center', width:'20%', flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.fontTypeBlack}>500 TL</Text>
                            <TouchableOpacity>
                                <Ionicons name='chevron-forward' size={25} color='#a6a9ad' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <View style={styles.viewNoticeItem}>
                        <View style={styles.viewNoticeIcon}>
                            <AntDesign name='creditcard' size={30} color='#0049b1'/>
                        </View>
                        <View style={styles.viewNoticeInfoHalf}>
                            <Text style={styles.fontTypeBlackBold}>Doğalgaz Faturası</Text>
                            <Text style={styles.fontTypeGraySmall}>19 Ekim 2022</Text>
                        </View>
                        <View style={{justifyContent:'center', width:'20%', flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.fontTypeBlack}>823,55 TL</Text>
                            <TouchableOpacity>
                                <Ionicons name='chevron-forward' size={25} color='#a6a9ad' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewNoticeItem}>
                        <View style={styles.viewNoticeIcon}>
                            <AntDesign name='creditcard' size={30} color='#0049b1'/>
                        </View>
                        <View style={styles.viewNoticeInfoHalf}>
                            <Text style={styles.fontTypeBlackBold}>Su Faturası</Text>
                            <Text style={styles.fontTypeGraySmall}>19 Ekim 2022</Text>
                        </View>
                        <View style={{justifyContent:'center', width:'20%', flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.fontTypeBlack}>823,55 TL</Text>
                            <TouchableOpacity>
                                <Ionicons name='chevron-forward' size={25} color='#a6a9ad' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewNoticeItem}>
                        <View style={styles.viewNoticeIcon}>
                            <AntDesign name='creditcard' size={30} color='#0049b1'/>
                        </View>
                        <View style={styles.viewNoticeInfoHalf}>
                            <Text style={styles.fontTypeBlackBold}>Su Faturası</Text>
                            <Text style={styles.fontTypeGraySmall}>19 Ekim 2022</Text>
                        </View>
                        <View style={{justifyContent:'center', width:'20%', flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.fontTypeBlack}>823,55 TL</Text>
                            <TouchableOpacity>
                                <Ionicons name='chevron-forward' size={25} color='#a6a9ad' />
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
                
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
            <View style={styles.footerItem}>
                <AntDesign name='creditcard' size={30} />
                <Text style={styles.footerText}>Hesap Özeti</Text>
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

