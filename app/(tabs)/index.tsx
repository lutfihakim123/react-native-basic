import { StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import React, { Component } from 'react'
import { styles } from '../../assets/styles/styles';

// Functional Component
export default function HomeScreen() {

  // react native basic
  // return (
  //   <View style={styles.container}>
  //     <Text>React Native Dasar</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Typography
  // return (
  //   <View style={styles.container}>
  //     <Text>Typography</Text>

  //     <br />

  //     <Text>Font Size</Text>

  //     {/* font size */}
  //     <Text style={{ fontSize: 10 }}>Lutfi Rahman Hakim</Text>
  //     <Text style={{ fontSize: 20 }}>Lutfi Rahman Hakim</Text>
  //     <Text style={{ fontSize: 30 }}>Lutfi Rahman Hakim</Text>

  //     <br />
  //     <Text>Font Weight</Text>
  //     {/* font weight */}
  //     <Text style={{ fontWeight: 'normal' }}>Lutfi Rahman Hakim</Text>
  //     <Text style={{ fontWeight: 'bold' }}>Lutfi Rahman Hakim</Text>

  //     <br />
  //     <Text>Font Style</Text>
  //     {/* font style */}
  //     <Text style={{ fontStyle: 'normal' }}>Lutfi Rahman Hakim</Text>
  //     <Text style={{ fontStyle: 'italic' }}>Lutfi Rahman Hakim</Text>

  //   </View>
  // );

  // Margin And Padding
  // return (
  //   <View style={styles.container}>
  //     <Text>Margin And Padding</Text>
  //     <View style={styles.card}>
  //       <View style={styles.content}>
  //         <Text>Hello World</Text> 
  //       </View>
  //     </View>
  //   </View>
  // );

  // FlexBox
  return (
    <View style={styles.container}>
      <View style={styles.wrapperKotak}>
          {/* kotak merah */}
          <View style={styles.merah}></View>
          {/* kotak biru */}
          <View style={styles.biru}></View>
          {/* kotak hijau */}
          <View style={styles.hijau}></View>
      </View>
    </View>
  );
  
}
