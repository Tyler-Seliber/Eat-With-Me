import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import colors from '../config/colors';
import MyField from '../components/MyField';
import React, { useState } from 'react';
import { hostEvent, getEvent } from '../services/firebase';

type ScreenProps = {
    navigation: any
}

export default function ViewMealScreen({ navigation }: ScreenProps) {
    
    const [eventName,enterEvent] = useState("");

    return (
        <SafeAreaView>
           
            <View>
                <ScrollView>
                   
                    
                <View style={{flexDirection:'row'}}>
                        {/* area for setting number of people */}
                        <MyField title="Event Key" type="text" secure={false} onChangeFn={enterEvent} ></MyField>
                        
                    </View>
                    <View style={styles.screenContainer}><Button title="enter" onPress={async () => { getEvent(eventName) }}/></View>


                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    screenContainer: {
        flex: 1,
        padding: 16,
        width:'300px'
      },
    topPanelView: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        width: '100%',
        flex: 1,
    }

});