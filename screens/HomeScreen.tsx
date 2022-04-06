import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Alert, SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import colors from "../config/colors";
import MyButton from '../components/MyButton';
import MyField from '../components/MyField';

type ScreenProps = {
    navigation: any,
    route: any
}



export default function HomeScreen({ navigation, route }: ScreenProps) {
    const [searchText, enterSearch] = useState("");
    return (
        <SafeAreaView style={styles.container}>
<<<<<<< Updated upstream
            <MyButton type="primary" text="Host" size="medium" onPressFn={() => navigation.navigate("HostMeal")}></MyButton>
=======
            <MyButton type="primary" text="Host" size="large" onPressFn={() => navigation.navigate("HostMeal")}></MyButton>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <MyField title="search bar" type="string" secure={false}  onChangeFn={enterSearch}/>
                <MyButton type="orangeiconContainer" text="Host" onPressFn={() => navigation.navigate("ViewMeal")}/>
            </View>
>>>>>>> Stashed changes
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        flex: 1,
        flexDirection: 'column',


    },
    mealfeed: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 6,
        width: "100%",
        padding: 10
    },
    topPanelView: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        width: `${100 * 3}%`,
        flex: 1,
    }

});