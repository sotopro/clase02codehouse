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


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Title />
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
