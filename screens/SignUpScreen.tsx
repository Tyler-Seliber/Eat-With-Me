import React, { useState } from 'react';
import { StyleSheet, View, Dimensions,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/MyButton';
import MyField from '../components/MyField';
import { getFirstName, signUpWithEmail } from '../services/firebase';
import colors from '../config/colors';

type ScreenProps = {
  navigation: any
}

export default function SignUpScreen({ navigation }: ScreenProps) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
   
    <SafeAreaView style={styles.orangecontainer}>
    <StatusBar style="light" />
    <View style={styles.whitecontainer}>
      <MyField title='First Name' type='text' onChangeFn={setFName} />
      <MyField title='Last Name' type='text' onChangeFn={setLName} />
      <MyField title='Email' type='text' onChangeFn={setEmail} />
      <MyField title='Password' type='text' secure={true} onChangeFn={setPassword} />
        <MyButton text="Sign Up" type="primary" size="large" onPressFn={async () => {
          let result = await signUpWithEmail(fName, lName, email, password);
          if (result === 'success') {
            let firstName = await getFirstName();
            navigation.navigate("Home", {firstName: firstName});
          }
        }} />
        <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  orangecontainer: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      flex:1,
  },
  whitecontainer: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flex:1,
},
});