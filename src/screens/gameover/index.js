import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import Numbers from '../../components/atoms/numbers';
import { styles } from './styles';
import { generateRandomNumber } from '../../utils/functions';
import { theme } from '../../utils/constants/theme';

const gameOverImage = require('../../../assets/images/gameover.jpg');

const GameOverScreen = (props) => {
    const { rounds, choice, onRestart } = props;
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait());
    }

    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait);
        return () => {
            Dimensions.removeEventListener('change', statePortrait);
        }
    })
    
    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/75/20/38/1000_F_375203802_FOVtD1IWxFxSRdPDlw7XtlcDJ145PV2V.jpg' }} style={styles.image} /> */}
            <Image source={gameOverImage} style={styles.image} />
            <Text style={styles.text}>Intentos: {rounds}</Text>
            <Numbers number={choice} />
            <View style={styles.buttonContainer}>
                <Button title="Nuevo Juego" onPress={() => onRestart && onRestart()} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameOverScreen;