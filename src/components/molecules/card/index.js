import React from 'react';
import { View, Text, Button } from 'react-native';
import { theme } from '../../../utils/constants/theme';
import { styles } from './styles';
import Input from '../../atoms/input';

const Card = ({title, color, type, handleOnChange, value, autoFocus,
    autoComplete,
    keyboardType}) => {
    return (
        <View style={[styles.container, {backgroundColor: type === '1' ? theme.primaryVariant : theme.secondaryColor}]}>
            <Text style={styles.text}>{title}</Text>
            <Input autoFocus={autoFocus} autoComplete={autoComplete} keyboardType={keyboardType} onChangeText={handleOnChange} value={value} />
            <View style={styles.buttonContainer}>
                <Button title="Limpiar" color={color} />
                <Button title="Confirmar" color={color} />
            </View>
        </View>
    )
}

export default Card;