import { View, Text, StyleSheet, ImageBackground, Image, Alert, SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import colors from "../config/colors";
import MyButton from '../components/MyButton';

type ScreenProps = {
    navigation: any,
    route: any
}



export default function HomeScreen({ navigation, route }: ScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <MyButton type="primary" text="Host" size="small" onPressFn={() => navigation.navigate("HostMeal")}></MyButton>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
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