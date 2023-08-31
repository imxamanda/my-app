import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Filho from './Filho'

export default function Pai() {

    const [numeroAleatorio, setNumeroAleatorio] = useState()

  return (
    <View>
      <Text style={{fontSize: 30}}>O numero aleatório é?</Text>
      <Text>{numeroAleatorio}</Text>

      <Filho min={1} max={60} state={numeroAleatorio} setNumeroAleatorio={setNumeroAleatorio}/>

    </View>
  )
}

const styles = StyleSheet.create({})