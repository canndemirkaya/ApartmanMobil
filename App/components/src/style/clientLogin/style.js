import { StyleSheet, Dimensions } from "react-native";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    container:{
        flex:1,
        width:screenWidth,
        
        // backgroundColor:'#eae6df'

    },
    header:{
        backgroundColor:'#0049b1',
        flexDirection:'row',
        width:'100%',
        height:60
        
    },
    headerText:{
        justifyContent:'center',
        alignItems:'center',
        flex:1

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
    main:{
        flex:0.9,
        
    },
    inputBoxView:{
        flex:0.4
    },
    inputBoxInput:{
        width:screenWidth,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10
    },
    inputBoxInputRow:{
        width:screenWidth,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10
    },
    inputType1:{
        backgroundColor:'#fff',
        fontSize:17,
    },
    viewCenter:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    row:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    halfInRowLeft:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
    },
    halfInRowRight:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',

    },
    halfInRow:{
        width:'50%',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    textTypeGraySmallCenter:{
        textAlign:'center',
    },
    endOfPage:{
        justifyContent:'center',
        alignContent:'center',
        width:screenWidth
    },
    b_buttonType3:{
        width:screenWidth-50,
        paddingVertical:15,
        backgroundColor:'#0049b1',
        textAlign:'center',
        color:'#fff',
        alignSelf:'center'

    }
    



});