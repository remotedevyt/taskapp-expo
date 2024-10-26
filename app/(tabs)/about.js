import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import appstyles from '../../components/appstyle';
import Divider from '../../components/Divider';

const About = () => {
  return (
    <SafeAreaView style={appstyles.container}>
           <ScrollView style={{paddingHorizontal:15}}>
              <View style={appstyles.card}>
                  <Text style={appstyles.h2}>About Task App</Text>
                  <Divider />
              </View>
           </ScrollView>
        </SafeAreaView>
  )
}

export default About;