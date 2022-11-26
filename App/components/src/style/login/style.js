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
        flex:0.6,
        width:screenWidth,
        alignItems:'center',
        marginTop:100
        
    },
    v_headerText:{
        alignItems:'center',
        justifyContent:'center',
        width:'70%'
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
        color:'#fff'
    },
    t_headerText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center'
    },
    v_textBox:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:15,
        marginTop:50,
        width:screenWidth-50,
        backgroundColor:'#fff',
    },
    v_input:{
        flexDirection:'row', 
        width:screenWidth-50, 
        justifyContent:'center', 
        alignItems:'center',
        borderBottomColor:'#0049b1',
        borderBottomWidth:1,
    },
    inputType1:{
        color:'#335755',
        fontSize:13,
        width:screenWidth-185,
        marginLeft:25,
    },
    inputType2:{
        color:'#335755',
        fontSize:13,
        width:screenWidth-185,
        marginLeft:10,

    },
    iconType1:{
        color:'#0049b1',
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center', 
    },
    

});