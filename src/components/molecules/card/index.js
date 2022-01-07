import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const Card = ({title, color}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Limpiar" color={color} />
                <Button title="Confirmar" color={color} />
            </View>
        </View>
    )
}

export default Card;