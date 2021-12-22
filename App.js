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
  Button
} from 'react-native';



const App = () => {
  return (
    <View style={{ flex: 1}}>
      <View style={{ flexDirection: 'row',  padding: 20, justifyContent: 'space-around', alignItems: 'center'}}>
        <TextInput style={{ flex: 0.8, borderBottomWidth: 1, borderBottomColor: '#cccccc' }} placeholder='name a task'/>
        <Button  title='Send' color='#9191E9' />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
  
// });

export default App;
