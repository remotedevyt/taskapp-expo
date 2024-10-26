import { StyleSheet } from 'react-native'

const appstyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8f8'
    },
    scrollview:{
        padding:15
    },
    card:{
        padding:2,
        marginBottom:15
    },
    h1:{
        fontSize:28,
        fontFamily:'poppins-medium',
        marginVertical:2,
        color:'#000'
    },
    h2:{
        fontSize:20,
        fontFamily:'poppins-medium',
        marginVertical:2,
        color:'#222'
    },
    h3:{
        fontSize:16,
        fontFamily:'poppins-regular',
        marginVertical:1,
        color:'#222'
    },
    btn:{
        backgroundColor:'#e2ebfa',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    },
    input:{
        height:50,
        marginVertical:10,
        borderWidth:1,
        borderColor:'#555',
        padding:10,
        borderRadius:5
    }
})

export default appstyles;