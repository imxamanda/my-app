import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

export default function DigiteSeuNome() {

    const [nome, setNome] = useState('')
    const [valorDigitado, setValorDigitado] = useState('')

  return (
    <View>
      <Text style={styles.texto}>Digite Seu Nome</Text>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setValorDigitado(e)}
      
      />

      <Button
        title='Enviar'
        onPress={()=>alert('Enviar')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
     },

     input: {
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
        
     }
})
