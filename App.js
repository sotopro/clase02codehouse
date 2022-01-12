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
  SafeAreaView,
} from 'react-native';

import GameStart from './src/screens/gamestart/index';
import GameScreen from './src/screens/gamescreen/index';
import Header from './src/components/molecules/header/index';

const App = () => {
  const [userNumber, setUserNumber] = useState('');

  const handlerStartGamer = (selectedNumber) => {
    setUserNumber(selectedNumber);
  } 

  let content = userNumber ? 
    <GameScreen userOption={userNumber} /> :
    <GameStart onStartGame={handlerStartGamer} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Header title="Adivina el número" />
        {content}
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
