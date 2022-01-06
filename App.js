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



const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
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
