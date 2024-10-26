import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Storage from '../../components/Storage'
import { SafeAreaView } from 'react-native-safe-area-context';
import appstyles from '../../components/appstyle';
import Btn from '../../components/Btn';
import Divider from '../../components/Divider';

const Settings = () => {
  const clearData = async () => {
    let dataRemove = await Storage.removeData('task')
    alert(dataRemove);
  }
  return (
    <SafeAreaView style={appstyles.container}>
           <ScrollView style={{paddingHorizontal:15}}>
              <View style={appstyles.card}>
                  <Text style={appstyles.h2}>Settings</Text>
                  <Divider />
                  <Btn text="Clear Storage" bgcolor="#555" press={()=> clearData()} />
              </View>
           </ScrollView>
        </SafeAreaView>
  )
}

export default Settings;