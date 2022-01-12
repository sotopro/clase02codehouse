import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Numbers from '../../components/atoms/numbers';
import { styles } from './styles';
import { generateRandomNumber } from '../../utils/functions';
import { theme } from '../../utils/constants/theme';

const GameScreen = (props) => {
    const { userOption } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 100, userOption));

    
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Suposición del oponente</Text>
            <Numbers number={currentGuess} />
            <View style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => {}} color={theme.primaryColor}/>
                <Button title="Mayor" onPress={() => {}} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameScreen;