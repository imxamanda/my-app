import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './components/MeuComponente';
import MinMax from './components/MinMax';
 import NumeroAleatorio from './components/NumeroAleatorio';
import ComponenteControlado from './components/semana04/comunicacao-direta/ComponenteControlado';
import Pai from './components/semana04/comunicacao-direta/comunicacao-indireta/Pai';
import IntroducaoEstilos from './components/semana4/IntroducaoEstilos';
import ParOuImpar from './components/semana4/ParOuImpar';
import Profile from './components/semana4/Profile';
// import Pai from './components/semana04/comunicacao-direta/Pai';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <ImageBackground source={require('./assets/rainbow.jpg')} style={styles.imageBackground}>
    <Text style={styles.texto}>MOON</Text>
    <Image
   style={styles.image}
   source={require('./assets/cloud.png')}
    />
  
    <MeuComponente/>
    <MinMax min='10' max='20'/>
    <NumeroAleatorio min={10} max={20}/>
   </ImageBackground> 
   <Pai/>*/}
   {/* <ComponenteControlado/> */}
   {/* <ParOuImpar/> */}
   {/* <IntroducaoEstilos/> */}
   <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 300 ,
    height: 300
  },

  texto: {
    fontSize: 55,
    alignItems: "center",
    marginBottom: 50
    
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
