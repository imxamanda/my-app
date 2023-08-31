import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


    const Filho = ({max, min, numeroAleatorio, setNumeroAleatorio}) => {

        function gerarNumeroAleatorio() {
            setNumeroAleatorio(parseInt(Math.random() * (max - min +1)) + min)
        }


  return (
    <View>
      <Button
      title='Gerar Número Aleatório'
      onPress={gerarNumeroAleatorio}
      />
    </View>
  )
}

export default Filho