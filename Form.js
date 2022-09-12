import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function Form() {
   const user = [
      {
         name: 'ThuanHoang',
         password: '11111',
      },
      {
         name: 'TrangTruong',
         password: '121212',
      },
   ];
   const [result2, setResult2] = useState('chưa đăng nhập');
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');

   return (
      <View style={styles.form}>
         <TextInput
            placeholder="username"
            style={styles.input}
            value={username}
            onChangeText={(username) => setUserName(username)}></TextInput>
         <TextInput
            placeholder="password"
            style={styles.input}
            value={password}
            onChangeText={(password) => setPassword(password)}></TextInput>
         <Text style={{ paddingLeft: 50 }}>result:{result2}</Text>
         <View style={{ borderRadius: 50, width: 100, display: 'flex', justifyContent: 'center', marginLeft: 50 }}>
            <Button
               title="summit"
               onPress={() => {
                  let a = user.some((userItem) => {
                     return userItem.name === username && userItem.password === password;
                  });
                  a ? setResult2('đăng nhập thành công') : setResult2('sai thông tin ');
               }}></Button>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   // container: {
   //    flex: 1,
   //    backgroundColor: '#fff',
   //    alignItems: 'center',
   //    justifyContent: 'center',
   // },
   input: {
      textAlign: 'center',
   },
   form: {
      height: 150,
      width: 200,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 50,
      display: 'flex',
      justifyContent: 'center',
   },
});
