import React from 'react';
import { View, Text} from 'react-native';
import {  styles } from './styles';

const Numbers = ({number}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}

export default Numbers;