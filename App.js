import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './Form';

export default function App() {
   const [input, setInput] = useState('');
   const [result, setResult] = useState('ket qua');

   const ref = useRef();
   return (
      <View style={styles.container}>
         <Form></Form>
         <TextInput
            style={styles.input}
            ref={ref}
            onChangeText={(input) => {
               setInput(input);
            }}
            value={input}></TextInput>
         <Button
            title="summit"
            onPress={() => {
               ref.focus;
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
      width: 100,
      textAlign: 'center',
      backgroundColor: 'azure',
      fontSize: 20,
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 50,
   },
});
