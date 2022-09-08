import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
   const [input, setinput] = useState('');
   const [result, setResult] = useState('ket qua');
   const ref = useRef();
   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            ref={ref}
            onChangeText={(input) => {
               setinput(input);
            }}
            value={input}></TextInput>
         <Button
            title="summit"
            onPress={() => {
               ref.focus;
               console.log(ref);
               setResult(input);
            }}></Button>
         <Text>{result}</Text>
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
   input: {
      height: 40,
      width: 60,
      textAlign: 'center',
      backgroundColor: 'azure',
      fontSize: 20,
      borderColor: 'red',
   },
});
