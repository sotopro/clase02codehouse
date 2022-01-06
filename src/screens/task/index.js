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
   FlatList,
 } from 'react-native';
 
 import TaskList from '../../components/molecules/tasklist/index';
 
 
 
 const Task = () => {
   const [task, setTask] = useState('');
   const [taskList, setTaskList] = useState([]);
 
   const onChange = (text) => {
     setTask(text);
   }
 
   const addTask = () => {
     setTaskList([...taskList, {id: Math.random() , task}]);
     setTask('');
   }
 
   const deteleTask = (id) => {
     setTaskList(taskList.filter(task => task.id !== id));
   }
   console.log(taskList);
 
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
               keyExtractor={(item) => item.id.toString()}
               refreshing={true}
               data={taskList}
               renderItem={({item}) => <TaskList task={item} deleteTask={deteleTask} /> }
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
   },
   delete: {
     backgroundColor: 'red',
     width: 20,
     height: 20,
     margin: 10,
     color: '#ffffff',
   }
 });
 
 export default Task;
 