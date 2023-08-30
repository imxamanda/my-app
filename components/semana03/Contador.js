import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {

    const [valor, setValor] = useState(0)

    //let valor = 0

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        setValor (valor - 1 )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>VOLUME</Text>
            <Text style={styles.text}>{valor}</Text>
            <Text style={styles.botao}>VOLUME</Text>
            <Button
                title='+ INCREMENTAR'
                onPress={incrementar} />
            <Button
                title='- DECREMENTAR'
                onPress={decrementar} />
        </View>
    )
}

const styles = StyleSheet.create({})