import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
          source={{url:'https://portaledicase.com/wp-content/uploads/2022/11/shutterstock_1738196390-1024x683.jpg'}}
          style={styles.img}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 500
    },
    text: {
        fontSize: 20
    },
    textLabel: {
        
    }
})