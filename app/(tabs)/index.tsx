import { StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import React, { Component } from 'react'
import { styles } from '../../assets/styles/styles';

// Functional Component
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>React Native Dasar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Arrow Functional Component
// const index = () => {
//   return (
//     <View style={styles.container}>
//       <Text>React Native Dasar</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// Class Component 
// export default class index extends Component {
//   render() {
//     return (
//       <View>
//         <Text>index</Text>
//       </View>
//     )
//   }
// }
