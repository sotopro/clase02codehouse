/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder='name a task'/>
        <Button  title='Send' color='#9191E9' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flexDirection: 'row', 
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput : {
    flex: 0.8,
    borderBottomWidth: 1, 
    borderBottomColor: '#cccccc',
  }
})

export default App;
