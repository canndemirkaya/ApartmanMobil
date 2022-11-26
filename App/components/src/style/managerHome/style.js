import { StyleSheet, Dimensions } from "react-native";
import { ScreenWidth } from "react-native-elements/dist/helpers";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    container:{
        flex:1,
        width:screenWidth,
        
        // backgroundColor:'#eae6df'

    },
    linearGradient: {
        flex:0.4,
        width:'100%',
    },
    header:{
        backgroundColor:'#0049b1',
        flexDirection:'row',
        width:'100%',
        
        height:60,
        justifyContent:'center',
        alignItems:'center',
    },
    
    headerIcon:{
        justifyContent:'center',
        alignItems:'flex-start',
        position:'absolute',
        alignSelf:'center',
        marginLeft:10
    },
    textTypeWhiteHeader:{
        fontSize:20,
        color:'#fff',
    },
    headerItem:{

    },
    v_userCard:{
        width:screenWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    userCard:{
        width:screenWidth-50,
        flex:1,
        marginLeft:15,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:'#0049b1',
        borderRadius:20,
        backgroundColor:'#0049b1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    headerText:{
        fontSize:17,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color:'#fff'
    },
    userTextType1:{
        fontSize:19,
        color:'#fff',

    },
    userTextType2:{
        fontSize:16,
        color:'#fff',

    },
    v_userCardHeader:{
        flexDirection:'row',
        width:'80%',
   
    },
    userCardHeaderIcon:{
        marginRight:20,
        marginTop:15
    },
    v_userCardHeaderFont:{
        // justifycontent:'center',
        // alignItems:'center',
        textAlign:'center',
        alignContent:'center',
        marginLeft:20,
        marginTop:15,
        width:'100%'

    },
    userCardMain:{
        marginLeft:20,
        marginTop:25,
        
    },
    footer:{
        justifyContent:'flex-end',
        flex:0.08,
        height:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',

    },
    footerItem:{
        width:screenWidth/3,
        justifycontent:'center',
        alignItems:'center',
        
    },
    buttonType1:{
        paddingHorizontal:20,
        paddingVertical:5,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        borderColor:'#0049b1',
        color:'#0049b1',
        fontSize:16,
        fontWeight:'bold'
    },
    footerText:{
        // color:'#fff',
        fontSize:14
    },
    headerIconRight:{
        marginRight:20,
        color:'#fff'
    },
    headerLeft:{
        width:'25%',
        alignContent:'flex-start'
    },
    headerLeftText:{
        fontSize:16,
        marginLeft:10,
        fontWeight:'bold',
        color:'#fff'
    },
    headerMiddle:{
        width:'50%'
    },
    headerRight:{
        width:'25%',
        alignContent:'flex-end',
        alignItems:'flex-end',

    },
    v_secondView:{
        marginTop:15,
        width:screenWidth,
        flex:0.8,
        borderTopWidth:1,
        borderTopStartRadius:25,
        borderTopEndRadius:25,
        borderTopColor:'#eae6df',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 2,
    },
    fontTypeBlackBold:{
        fontSize:13,
        marginTop:3,
        color:'#2e2f30',
        fontWeight:'bold'

    },
    fontTypeBlackBigBold:{
        fontSize:14,
        marginTop:3,
        color:'#2e2f30',
        fontWeight:'bold'

    },
    fontTypeBlack:{
        fontSize:15,
        color:'#2e2f30',
    },
    fontTypeBlueBold:{
        fontSize:16,
        color:'#0049b1',
        fontWeight:'bold'
    },
    fontTypeBlue:{
        fontSize:16,
        color:'#0049b1',
    },
    fontTypeBlackSmall:{
        fontSize:14,
        color:'#000',
    },
    row:{
        flexDirection:'row',
        marginLeft:30,
        marginTop:20
    },
    rowUnsetMarginLeft:{
        flexDirection:'row',
        marginTop:15
    },
    viewTypeLeft:{
        flex:0.85
    },
    favoriCard:{
        width:(screenWidth/2) + 70,
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        marginHorizontal:10
    },
    favoriCardType2:{
        width:180,
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        marginHorizontal:10
    },
    duyuruimg:{
        width:(screenWidth/2) + 50,
        height:140
    },
    tabItems:{
        paddingHorizontal:5,
        // paddingVertical:25,
        width:165,
        height:70,
        backgroundColor:'#0049b1',
        marginHorizontal:15,
        borderRadius:15,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    tabTextHeader:{
        fontSize:16,
        color:'#fff',
        textAlign:'center',


    },
    tabRow:{
        flexDirection:'row',
        marginTop:20
    },
    ApartmanHeader:{
        fontSize:18,
        fontWeight:'bold'
        
    },
    ApartmanText:{
        fontSize:15,
        
    },
    tabScrollView:{
        flex:0.88,
        marginVertical:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    
    },
    shorcutView:{
        alignItems:'center',
        marginTop:20,
        

    },
    managerMainView:{
        flex:1,
        borderTopWidth:1,
        borderTopStartRadius:25,
        borderTopEndRadius:25,
        width:screenWidth,
        borderTopColor:'#eae6df',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.25,
        elevation: 2,
    },
    mainView:{
        flex:0.92, 
        alignItems:'center',
    },
    centeredView: {
        height:screenHeight,
        width:screenWidth,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute'
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        borderRadius:15,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:300,
        height:210,
    },
    button: {
        paddingHorizontal:20,
        paddingVertical:10,
        elevation: 2,
        marginHorizontal:15,
        
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      textStyle2:{
        fontWeight: "bold",
        textAlign: "center",
        marginTop:15,
        fontSize:16
      },
      textStyleSmall:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize:13
      },
      inputType1:{
        width:40,
        fontSize:16,
        marginTop:2

      },
      inputTypeforSurvey:{
        width:80,
        fontSize:16,
        marginTop:2,
        // textAlign:'center'
      },
      modalRowView:{
        flexDirection:'row'
      }
    
    
    


});