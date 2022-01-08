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
  const [number, setNumber] = useState(0);

  const handleOnChange = (inputNumber) => {
    console.warn(inputNumber)
    setNumber(inputNumber);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}>
        <Header title="Adivina el número" />
        <Title text="Comienza el juego" />
        <Card title="Elija un número" type={components.card.LIGHT} color={theme.primaryColor} handleOnChange={handleOnChange} value={number} autoFocus={true} autoComplete='off' keyboardType='numeric'/>
      </View> */}
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 0, flexBasis: 100, backgroundColor: 'blue'}}/>
        <View style={{ flex: 1, height: 50,flexBasis: 100, backgroundColor: 'yellow'}}/>
      </View>
      <View style={{ flex: 1, flexGrow: 0.3, backgroundColor: 'blue'}}/>
      <View style={{ flex: 1, backgroundColor: 'red'}}/>
      <View style={{ flex: 1, backgroundColor: 'green'}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
