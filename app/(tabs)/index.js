import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import appstyles from '../../components/appstyle';
import Card from '../../components/Card';
import { router, useFocusEffect } from 'expo-router';
import Storage from '../../components/Storage';


const Index = () => {
    const [tasks,setTasks] = useState([]);
    // let tasks = [
    //     {text:"Client Review Call",desc:"App Redesign",date:"Sunday, 22 Oct",status:'pending'},
    //     {text:"Client Review Call 1",desc:"App Redesign",date:"Sunday, 22 Oct",status:'pending'},
    //     {text:"Client Review Call 2",desc:"App Redesign",date:"Sunday, 22 Oct",status:'done'}
    // ]
    useFocusEffect(
    useCallback(()=>{
        const getTask = async () => {
            let alltasks = await Storage.fetchData('task')
            setTasks(alltasks);
        }
        getTask()
    },[])
    );

    const refreshTask = async () => {
        let alltasks = await Storage.fetchData('task')
        setTasks(alltasks);
    }
    return (
        <SafeAreaView style={appstyles.container}>
            <ScrollView style={appstyles.scrollview}>
            <View style={{justifyContent:'space-between',display:'flex',flexDirection:'row'}}>
                <View>
                    <Text style={appstyles.h1}>All Task</Text>
                    <Text style={appstyles.h2}>Thursday, 17 Oct </Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Pressable onPress={() => router.navigate('/task')} style={appstyles.btn} android_ripple={{ color: '#ddd', radius: 100 }}>
                        <Text style={appstyles.h2}>+ New Task</Text>
                    </Pressable>
                </View>
            </View>
            {tasks && tasks.length > 0 && tasks.map((x,i) => {
                return <Card key={i} data={x} onrefresh={() => refreshTask()} />
            })}
            

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Index;
