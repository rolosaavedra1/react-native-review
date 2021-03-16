import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Rolo');
  const [age, setAge] = useState(30);
  const nameChangeHandler = (value) => {
    setName(value);
  }
  const ageChangeHandler = (value) => {
    setAge(value);
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text> and my age is {age}</Text>
      <View>
      <Text>My name is...</Text>
       <TextInput
       style={styles.inputContainer}
       placeholder= 'e.g. John Doe'
       onChangeText= {nameChangeHandler}
       />
       <Text>My age is...</Text>
       <TextInput
       style={styles.inputContainer}
       multiline
       keyboardType='numeric'
       placeholder= 'e.g. 16'
       onChangeText= {ageChangeHandler}
       />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#7777',
  },
});
