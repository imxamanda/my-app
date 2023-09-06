import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntroducaoEstilos() {
  return (
    <View style= {{
        flex: 1, 
        backgroundColor: 'purple',
        // alignItems: 'center',
        // justifyContent: "flex-start"
        gap: 10
    }}>
    <View style={{ width: 50, height: 50 ,backgroundColor: '#c4c063'}}><Text>TEXTO</Text></View>
    <View style={{backgroundColor: '#6fc166', flex:1}}><Text>TEXTO</Text></View>
    <View style={{backgroundColor: '#a975b2', flex:1}}><Text>TEXTO</Text></View>
    <View style={{backgroundColor: '#b27581', flex:1}}><Text>TEXTO</Text></View>
      
    </View>
  )
}

const styles = StyleSheet.create({})