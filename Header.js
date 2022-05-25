
import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";


import { Ionicons } from '@expo/vector-icons'; 
export default function Header() {
  return (
    <View>
      <View style={styles.topContainer}></View>
      <View style={styles.mainContainer}>
        <Ionicons style = {{paddingLeft:'5%', paddingRight:'5%'}} name="home" size={44} color="#422b3a" />
        <Text style={styles.textInput}>Салон BMW</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "#008080",
  },
  mainContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#008080",
    padding: 5,
    paddingTop:10,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  textInput: {
    width: "65%",
    borderColor: "#422b3a",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#008080",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 25,
  },
});