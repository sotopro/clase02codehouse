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
} from 'react-native';

import Header from './src/components/molecules/header/index';
import Title from './src/components/atoms/title/index';
import Card from './src/components/molecules/card/index';
import { theme } from './src/utils/constants/theme';
import { components } from './src/utils/constants/components';
const App = () => {
  const [number, setNumber] = useState('');

  const handleOnChange = (inputNumber) => {
    console.warn(inputNumber)
    setNumber(inputNumber);
  }

  const handleOnClean = () => {
    setNumber('');
  }
  const handleOnConfirm = () => {
    console.warn('Confirmar')
  }
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
