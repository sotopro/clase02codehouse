import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import Title from '../../components/atoms/title/index'
import Card from '../../components/molecules/card/index'
import Numbers from '../../components/atoms/numbers/index'
import { components } from '../../utils/constants/components'
import { theme } from '../../utils/constants/theme'


const GameStart = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [startGame, setStartGame] = useState(false);

    const handleOnChange = (inputNumber) => {
        console.warn(inputNumber)
        setNumber(inputNumber.replace(/[^0-9]/g, ''));
      }
    
      const handleOnClean = () => {
        setNumber('');
      }
      const handleOnConfirm = () => {
        const chosenNumber = parseInt(number);
        if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 100) return
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setNumber('')
      }
    
      const handleStartGame = () => {
        onStartGame(selectedNumber)
        setStartGame(true)
      }
    
      const confirmedOuput = confirmed ? (
      <View style={styles.confirmedContainer}>
        <Text style={styles.confirmedtext}>El número elegido es:</Text>
        <Numbers number={selectedNumber} />
        <Button title="Empezar juego" onPress={() => handleStartGame()} color="#52528C"/>
      </View>
      ) : null;

    return (
        <View style={styles.container}>
            <Title text="Comienza el juego" />
            <Card 
            title="Elija un número"
            type={components.card.LIGHT}
            color={theme.primaryColor}
            handleOnChange={handleOnChange} 
            value={number} 
            autoFocus={true} 
            autoComplete='off' 
            keyboardType='numeric'
            handleOnClean={handleOnClean}
            handleOnConfirm={handleOnConfirm}
            />
            {confirmedOuput}
      </View>
    )
}

export default GameStart;