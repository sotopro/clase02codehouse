import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";


const Input = ({...props}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} />
        </View>
    )
}

export default Input;