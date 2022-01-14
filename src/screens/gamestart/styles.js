import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      confirmedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.25
      },
      confirmedtext: {
        fontSize: 16,
        color: '#212121',
        marginVertical: 10,
      },
  });