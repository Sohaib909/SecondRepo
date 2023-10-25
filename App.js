import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';

export default function App() {
  

  return (
    
    <View style={styles.container}>
     <View style={styles.top}>
      <Text>1</Text>
     </View>

     <View style={styles.center}>
     <Text>2</Text>
     </View>
     <View style={styles.bottom}>
     <Text>3</Text>
     </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted to space between container1 and container2
  },
  top: {
    flex:"25%",
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'space-between', // Adjusted to space between container1 and container2
  },
  center: {
    flex: "50%",
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bottom: {
    flex: "25%",
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
