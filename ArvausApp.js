import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native';
import { Alert } from 'react-native';

export default function App() {

    //Annettu numero tallennetaan number-tilamuuttujaan
    //viesti-tilamuuttujaan asetetaan vastaus ja näytetään se käyttöliittymässä
    const [number, setNumber] = useState ('');
    const [viesti, setViesti] = useState ('');

    //Arvausten lukumäärät
    var guess = 1;
   

     //funktio suorittaa numeron arpomisen ja tarkistuksen
     const pressedGuess = () => {

      //Arvotaan satunnainen numero väliltä 1-100
      const random = Math.floor(Math.random() * 10) + 1;
      parseInt(number);

      if(number == random){
        Alert.alert('You guessed the number in:' + guess + 'guesses');
        
      }
      else if(number > random){
        guess++;
        setViesti('Your guess is too high');

      }else {
        guess++;
        setViesti('Your guess is too low')
      
      }
     
     }

  return (
    <View style={styles.container}>
      <Text> Guess a random number between 1-100! </Text>
      <Text> {viesti}</Text>

      {/*Syöttökenttä numeron arvaamiseen */}
      {/*onChange antaa muuttujalle sisällön */}
      <TextInput 
          style={styles.input} 
          onChangeText= {number => setNumber(number)}
          value={number}
          keyboardType="numeric"/>

       {/*Painike, joka arpoo numeron */}   
      <Button onPress={pressedGuess} title= "Make a guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'black', 
    borderWidth: 1
  },
  text:{
    fontSize: 20,
    
  }
});
