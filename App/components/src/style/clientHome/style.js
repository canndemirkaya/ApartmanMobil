import { StyleSheet, Dimensions } from "react-native";

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
    headerItem:{

    },
    v_userCard:{
        flex:0.3,
        marginTop:25,
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
        color:'#fff',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
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
        fontSize:15,
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
        marginTop:12
    },
    viewTypeLeft:{
        flex:0.85
    },
    favoriCard:{
        flex:0.5,
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
    viewNotice:{
        flex:1,
        borderWidth:1,
        width:'100%',
        borderColor:'#fff',
        marginTop:10,
    },
    viewNoticeItem:{
        borderWidth:1,
        backgroundColor:'#fff',
        width:'100%',
        borderColor:'#fff',
        paddingHorizontal:10, 
        flexDirection:'row',
        paddingVertical:10,
    },
    viewNoticeIcon:{
        alignItems:'flex-start',
        justifyContent:'center',
    },
    viewNoticeInfoHalf:{
        marginHorizontal:20,
        justifyContent:'center',
        width:'58%'
    },
    fontTypeGraySmall:{
        fontSize:13,
        color:'#a6a9ad'
    }

    


});