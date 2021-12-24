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
  TextInput,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';



const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onChange = (text) => {
    setTask(text);
  }

  const addTask = () => {
    setTaskList([...taskList, task]);
    setTask('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput 
          autoFocus
          style={styles.textInput} 
          placeholder='name a task'
          onChangeText={(text) => onChange(text)}
          value={task}
        />
        <Button
          onPress={() => addTask()}
          title='Send'
          color='#9191E9'
          disabled={task.trim().length === 0}
          />
      </View>
        <View style={styles.taskListContainer}>
          <Text style={styles.taskListTitle}>Task List</Text>
          {taskList.length > 0 ? (
            <FlatList
              keyExtractor={(index) => index.toString()}
              refreshing={true}
              data={taskList}
              renderItem={({item}) => <Text style={styles.textList}>{item}</Text>}
            />
          ) : (
            <Text>No tasks yet</Text>
          )}
        </View>
    </SafeAreaView>
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
  },
  taskListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  taskListContainer: {
    paddingHorizontal: 40,
    marginTop: 10,
  },
  textList: {
    padding: 50,
    marginVertical: 20,
    backgroundColor: '#9191E9',
    fontSize: 30,
  }
});

export default App;
