import { View, Text, StyleSheet, ImageBackground, Image, Alert, SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView} from "react-native";
import colors from "../config/colors";
import MyButton from '../components/MyButton';

type ScreenProps = {
    navigation: any,
    route: any
}



export default function HomeScreen({ navigation, route }: ScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topPanelView}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text>Menu</Text>
                </TouchableOpacity>
                 {/*host meal button- should link to host meal screen */}
                <MyButton onPressFn={() => navigation.navigate("HostMeal")}></MyButton>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text>Notifs</Text>
                </TouchableOpacity>
            </View>
            {/*search bar */}
            <View style={{flex:1, width:'100%'}}>
                <TextInput>whatcha in the mood for?</TextInput>
            </View>
             {/*area for meal list */}
            <View>
               
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        flex:1,
        flexDirection: 'column',
    
       
    },
    mealfeed:{
        backgroundColor: colors.primary,
        alignItems:'center',
        justifyContent:'flex-start',
        flex: 6,
        width: "100%",
        padding: 10
    },
    topPanelView:{
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        width: `${100*3}%`,
        flex:1,
    }

});