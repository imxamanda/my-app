import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <Text style={styles.texto}>MOON</Text>
  <Image
   style={styles.image}
   source={require('./assets/lua.png')}
   />
  
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6959CD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginTop: 55,
    width: 300 ,
    height: 300
  },

  texto: {
    fontSize: 55,
    
  }
});
