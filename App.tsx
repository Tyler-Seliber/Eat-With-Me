import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUpScreen from './screens/StartUpScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import HostMealScreen from './screens/HostMealScreen';
import ViewMealScreen from './screens/ViewMealScreen';
import React from 'react';
import { logOut } from './services/firebase';
<<<<<<< Updated upstream
import colors from './config/colors';
=======
import MyButton from './components/MyButton';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< Updated upstream
        
=======
      <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          title: '',
          headerRight: () => (
            <Button title="Log Out" color={'#133C55'} onPress={async () => {
              await logOut();
              navigation.popToTop();
            }}></Button>
          ),
          headerLeft:()=> (
            <MyButton type="icon" text= "⥱" onPress={() => navigation.navigate("ViewMeal")}>

            </MyButton>
          )
        })} />
      <Stack.Screen name="ViewMeal" component={ViewMealScreen} options={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          title: 'View Meal',
          headerBackVisible:true,
        }} />
>>>>>>> Stashed changes
        <Stack.Screen name="StartUp" component={StartUpScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="LogIn" component={LogInScreen} options={{
          headerStyle: { backgroundColor: 'transparent'},
          headerTintColor: colors.secondary,
          headerShadowVisible: false,
<<<<<<< Updated upstream
          headerTransparent: true,
          title: 'Log In'
        }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          headerStyle: { backgroundColor: 'transparent'},
          headerTintColor: colors.secondary,
          headerShadowVisible: false,
          headerTransparent: true,
          title: 'Sign Up'
        }} />
        <Stack.Screen name="HostMeal" component={HostMealScreen} options={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#133C55',
          headerShadowVisible: true,
          title: 'Host Meal'
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
=======
          title: 'Log In',
          headerBackVisible:true,
        }} />
        <Stack.Screen name="HostMeal" component={HostMealScreen} options={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          headerBackVisible:true,
          title: 'Host Meal'
        }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
>>>>>>> Stashed changes
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          title: 'Sign Up',
          headerBackVisible:true,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
