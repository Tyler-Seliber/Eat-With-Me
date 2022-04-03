import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Dimensions, StyleSheet, Text, SafeAreaView } from "react-native";
import MyButton from '../components/MyButton';
import colors from '../config/colors';



type ScreenProps = {
    navigation: any
}

export default function StartUpScreen({ navigation }: ScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
        
            <Text style={{color: 'white', fontSize:40,  }}>Eat With Me</Text>
          
                <MyButton type="primary" text="Login" size="large" onPressFn={() => navigation.navigate("LogIn")} />
                
                <MyButton type="secondary" text="Sign Up" size="large" onPressFn={() => navigation.navigate("SignUp")} />
            
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
        flex:1,
        flexDirection: 'column',
    
       
    },
    fixToText: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});