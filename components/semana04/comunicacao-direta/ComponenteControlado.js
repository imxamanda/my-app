import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ComponenteControlado() {

    const [nome, setNome] = useState('')



  return (
    <View>
      <Text style={{fontSize: 30}}>ComponenteControlado</Text>
      <Text style={{fontSize: 30}}> {nome}</Text>

      <TextInput
      value='texto'
      onChangeText={valorDigitado =>}
      />

    </View>
  )
}

const styles = StyleSheet.create({})