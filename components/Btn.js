import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Btn = (params) => {
  return (
    <View style={{borderColor:'#ccc',borderWidth:0.5,flex:1,marginVertical:5}}>
        <Pressable onPress={()=> params.press()} style={[styles.btn,{backgroundColor:params.bgcolor}]}>
            <Text style={styles.text}>{params.text}</Text>
        </Pressable>
    </View>
  )
}

export default Btn;

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    btn:{
        borderRadius:5,
        paddingVertical:15,
        elevation:2
    }
});