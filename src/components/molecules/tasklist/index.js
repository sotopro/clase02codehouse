import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity} from 'react-native'
const TaskList = ({task, deleteTask}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textList}>{task.task}</Text>
            <TouchableOpacity style={styles.containerDelete} onPress={() => deleteTask && deleteTask(task.id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}


export default TaskList;