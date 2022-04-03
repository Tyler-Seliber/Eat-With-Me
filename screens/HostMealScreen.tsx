import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import MyButton from '../components/MyButton';
import colors from '../config/colors';


type ScreenProps = {
    navigation: any
}

export default function LogInScreen({ navigation }: ScreenProps) {
    return (
        <SafeAreaView>
            <View style={styles.topPanelView}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text>Menu</Text>
                </TouchableOpacity>
                <Text>EWM</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text>Notifs</Text>
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView>
                    <Text>Add Dishes</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput></TextInput>
                        <MyButton></MyButton>
                    </View>
                    <View>
                        {/* area for adding images */}
                    </View>
                    <View>
                        {/* area for setting date */}
                    </View>
                    <View>
                        {/* area for setting time */}
                    </View>
                    <View>
                        {/* area for setting location */}
                    </View>
                    <View>
                        {/* area for setting number of people */}
                    </View>
                    <View>
                        {/* area for declaring allergens */}
                    </View>
                    <View>
                        {/* area for notes */}
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    topPanelView: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        width: `${100 * 3}%`,
        flex: 1,
    }

});