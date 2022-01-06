import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    textList: {
      flex: 0.8,
      paddingVertical: 20,
      marginVertical: 10,
      backgroundColor: '#9191E9',
      fontSize: 30,
    },
    containerDelete: {
      flex: 0.2,
      marginVertical: 10,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    delete: {
      margin: 0,
      color: '#ffffff',
    }
  });