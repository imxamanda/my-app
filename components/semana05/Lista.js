import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

export default function Lista() {

    const carros = ['BMW', 'Ferrari', 'Mercedes', 'Audi', 'Fiat']
    // opçao 2 const carros =  [{
    //     nome: 'BMW',
    //     cor: 'Preto'
    // }, {
    //     nome: 'Ferrari',
    //     cor: 'Vermelha'
    // }, {
    //     nome: 'Mercedes',
    //     cor: 'Azul'
    // }]

  return (
    <View>
      
      {/* {carros.map((item, index) => {
         return(
            <Text key={index} style={{fontSize: 30}}>O nome do carro é: {item}</Text>     
         <>
        //opçao 2 <Text key={index} style={{fontSize: 30}}>O nome do carro é: {item.nome}</Text>
        // opçao 2 <Text key={index} style={{fontSize: 30}}>A cor do carro é: {item.cor}</Text>
        // </>
         {/* ) 
    })} */}

    {/* <FlatList
    data={carros}
    renderItem=[({item}) => <Text key={index} style={{fontSize: 30}}>O nome do carro é: {item}</Text> ]

    /> */}

    </View>
  )
}

const styles = StyleSheet.create({})