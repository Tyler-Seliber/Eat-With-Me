// import React from "react";
// import { View, StyleSheet, Text } from "react-native";
// import MyIconButton from "./MyIconButton";

// export type Props = {
//     leadingIcon?: string,
//     trailingIcon?: string,
//     title: string,
// }

// const MyAppBar: React.FC<Props> = ({title, leadingIcon, trailingIcon}) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.leading}>
//                 <MyIconButton icon={leadingIcon ? leadingIcon : ''}/>
//             </View>
//             <View style={styles.title}>
//                 <Text style={styles.text}>{title}</Text>
//             </View>
//             <View style={styles.trailing}>
//                 <MyIconButton icon={trailingIcon ? trailingIcon : ''}/>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         height: 80,
//         backgroundColor: '#133C55',
//     },
//     title: {
//         height: 80,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlignVertical: 'bottom',
//         paddingVertical: 10,
//         color: 'white',
//         bottom: 0,
//         position: 'absolute'
//     },
//     leading: {
//         justifyContent: 'flex-end',
//         flexDirection: 'row',
//         bottom: 0,
//         position: 'absolute',
//         padding: 10,
//         left: 0
//     },
//     trailing: {
//         justifyContent: 'flex-end',
//         flexDirection: 'row',
//         bottom: 0,
//         position: 'absolute',
//         padding: 10,
//         right: 0
//     }
// });

// export default MyAppBar;