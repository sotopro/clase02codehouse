import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";


const Input = ({onChangeText, ...props}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} onChangeText={(value) => onChangeText(value)}/>
        </View>
    )
}

export default Input;