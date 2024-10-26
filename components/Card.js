import { View, Text, Pressable } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Divider from './Divider';
import appstyles from './appstyle';
import Storage from './Storage';

const Card = (params) => {

    const updateTask = async (name) => {
        let alltasks = await Storage.fetchData('task')
        let newTask = null
        if(alltasks){
            newTask = await alltasks.map((x) => {
                if(x.name == name){
                    x.status = 'done'
                }
                return x
            });
            const saveData = await Storage.saveData('task',newTask);
            params.onrefresh()
        }
    }

  return (
    <View style={{padding:15,borderWidth:1,borderColor:'#ddd',borderRadius:20,backgroundColor:'#fff',marginVertical:5}}>
    <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
        <View>
            {params.data.status == 'done' ? <Text style={[appstyles.h2,{textDecorationLine:'line-through'}]}>{params.data.name}</Text>
            : <Text style={[appstyles.h2]}>{params.data.name}</Text>}

            <Text style={appstyles.h3}>{params.data.desc}</Text>
        </View>
        <View>
            {params.data.status == 'pending' ? 
            <Pressable onPress={()=>updateTask(params.data.name)}>
                <MaterialCommunityIcons size={28} color='#0860fb' name='circle-outline' />
            </Pressable> : 
            <MaterialCommunityIcons size={28} color='#0860fb' name='check-circle' />
            }
        </View>
    </View>
    <Divider />
    <View>
        <Text>{params.data.date}</Text>
    </View>
    </View>
  )
}

export default Card;