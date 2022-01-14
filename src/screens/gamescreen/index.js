import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Numbers from '../../components/atoms/numbers';
import { styles } from './styles';
import { generateRandomNumber } from '../../utils/functions';
import { theme } from '../../utils/constants/theme';

const GameScreen = (props) => {
    const { userOption, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 100, userOption));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userOption) onGameOver(rounds)
    }, [currentGuess, userOption, onGameOver])

    const handlerNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userOption) ||
            (direction === 'greater' && currentGuess > userOption)
        ) {
            Alert.alert('No mientas', 'Tu sabes que no es verdad...!', [
                { text: 'Disculpa', style: 'Cancelar' }
            ])
        }

        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(current => current + 1);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Suposición del oponente</Text>
            <Numbers number={currentGuess} />
            <View style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => handlerNextGuess('lower')} color={theme.primaryColor}/>
                <Button title="Mayor" onPress={() =>  handlerNextGuess('greater')} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameScreen;