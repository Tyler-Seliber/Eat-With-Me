import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import MyButton from '../components/MyButton';
import colors from '../config/colors';
import MyField from '../components/MyField';
import React, { useState } from 'react';
import food from '../assets/pizza.png';

type ScreenProps = {
  navigation: any
}

export default function ViewMealScreen({ navigation }: ScreenProps) {
    return (
      <View style={styles.columnContainer}>
            <ImageBackground source={food} style={[styles.columnContainer, {width: '120%', height: '60%', top: -20}]}> 

              <Text style={styles.whiteTextBold}>Homemade Pizza</Text>
              <Text style={styles.grayTextBold}>Hosted by User </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.whiteTextReg}> 7:30 </Text>
                <Text style={styles.whiteTextReg}> 5/6 </Text>
                <Text style={styles.whiteTextReg}> $0 </Text>
              </View>

          <View style={styles.rowContainer}>
                <Text style={styles.whiteTextReg}> Wed 2/16 </Text>
                <Text style={styles.whiteTextReg}> Seats Available </Text>
                <Text style={styles.whiteTextReg}> Fee </Text>
          </View>
            </ImageBackground>
          <View style={{alignItems: 'center', justifyContent: 'space-evenly', padding: 20, flex:1, flexDirection: 'row', backgroundColor:'white'}} >
              <MyButton type="primary" size="large" text="Reserve" />
              <MyButton type="icon" text="♥"/>
              <MyButton type="icon" text="✉" />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-evenly', padding: 20, flex:1, flexDirection: 'column', backgroundColor:'white'}}>
            <Text style={styles.blackTextBold}>About Meal:</Text>
            <Text style={styles.grayTextReg}>Just a casual get together to meet some new people</Text>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
  rowContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 20,
      flex:1,
      flexDirection: 'row'

  },
  columnContainer: {
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    flexDirection: 'column'
  },
  whiteTextBold:{
    color:'white',
    fontSize: 40,
    fontWeight:'bold'
  },
  whiteTextReg:{
    color:'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  grayTextBold:{
    color:'gray',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle:"italic"
  
  },
  grayTextReg:{
    color:'gray',
    fontSize: 18,
    fontStyle:"italic"
  },
  blackTextBold:{
    color:'black',
    fontSize: 27,
    fontWeight: 'bold'
  }
});