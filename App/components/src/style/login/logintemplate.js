import { StyleSheet, Dimensions } from "react-native";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    },
    linearGradient: {
        flex:1,
        width:'100%',
    },
    header:{
        flex:0.1,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    v_main:{
        flex:0.7,
        width:screenWidth,
        alignItems:'center',
        justifyContent:'center'        
    },
    v_headerText:{
        alignItems:'center',
        justifyContent:'center',
        // width:'70%'
        width:screenWidth

    },
    v_headerIconLeft:{
        alignItems:'center',
        justifyContent:'flex-start',
        width:'15%'
    },
    v_headerIconRight:{
        alignItems:'center',
        justifyContent:'flex-end',
        width:'15%'
    },
    headerText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'

    },
    headerBarIcon:{
        color:'#fff',
    },
    mainIconUser:{
        color:'#fff',
        marginTop:15,
    },
    mainIconDot:{
        color:'#fff',
        marginTop:15,
        marginHorizontal:5
    },
    t_mainTextType1:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginTop:10,
        marginLeft:10,
    },
    t_mainTextType2:{
        fontSize:17,
        color:'#fff',
        marginTop:5

    },
    v_dots:{
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    v_buttons:{
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:15,
    },
    b_buttonType1:{
        paddingHorizontal:20,
        paddingVertical:12,
        backgroundColor:'#0049b1',
        color:'#fff',
        fontSize:16
    },
    b_buttonType2:{
        marginLeft:20,
        paddingHorizontal:20,
        paddingVertical:12,
        backgroundColor:'#0049b1',
        color:'#fff',
        fontSize:16

    },
    b_buttonType3:{
        marginLeft:20,
        paddingHorizontal:100,
        paddingVertical:12,
        backgroundColor:'#0049b1',
        color:'#fff',
        
        fontSize:16

    },
    v_news:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center'
    },
    v_card:{
        borderColor:'#fff',
        borderWidth:1,
        width: (screenWidth-100) / 3,
        height: 100,
        marginHorizontal:5
    },
    t_version:{
        fontSize:13,
        color:'#000'
    }

});