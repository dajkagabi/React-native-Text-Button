import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Hello React Native!</Text>

      <Text style={styles.textstyle}>Let's go</Text>



      <Button title='Click me!' onPress={() => alert
        ("Hello I am React Native Button") /* disable = {true/false} */}>
      </Button>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyle: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
    // backgroundColor: "floralwhite",

  }
});
