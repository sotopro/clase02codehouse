/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';

import Header from './src/components/molecules/header/index';
import Title from './src/components/atoms/title/index';
import Card from './src/components/molecules/card/index';
import { theme } from './src/utils/constants/theme';
import { components } from './src/utils/constants/components';
import Numbers from './src/components/atoms/numbers/index';
import GameScreen from './src/screens/gamescreen';
const App = () => {
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [startGame, setStartGame] = useState(false);

  const handleOnChange = (inputNumber) => {
    console.warn(inputNumber)
    setNumber(inputNumber.replace(/[^0-9]/g, ''));
  }

  const handleOnClean = () => {
    setNumber('');
  }
  const handleOnConfirm = () => {
    const chosenNumber = parseInt(number);
    if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 100) return
    setConfirmed(true);
    setSelectedNumber(chosenNumber)
    setNumber('')
  }

  const handleStartGame = () => {
    setStartGame(true)
  }

  const confirmedOuput = confirmed ? (
  <View style={styles.confirmedContainer}>
    <Text style={styles.confirmedtext}>El número elegido es:</Text>
    <Numbers number={selectedNumber} />
    <Button title="Empezar juego" onPress={() => handleStartGame()} color="#52528C"/>
  </View>
  ) : null;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        <Title text="Comienza el juego" />
        <Card 
          title="Elija un número"
          type={components.card.LIGHT}
          color={theme.primaryColor}
          handleOnChange={handleOnChange} 
          value={number} 
          autoFocus={true} 
          autoComplete='off' 
          keyboardType='numeric'
          handleOnClean={handleOnClean}
          handleOnConfirm={handleOnConfirm}
        />
        {confirmedOuput}
        {/* <GameScreen /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.15,
  },
  confirmedtext: {
    fontSize: 16,
    color: '#212121',
    marginVertical: 10,
  },
});

export default App;
