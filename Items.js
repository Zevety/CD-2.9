import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
export default function ExerciseItem(props) {
  return (
    <View style={{}}>
        <View style={{backgroundColor:'#008080'}}>
      <Text style={styles.exerciseItemNameText}>{props.name}</Text>
        </View>
    <View style={styles.exerciseItemContainer}>
    
      <FontAwesome5 name={props.iconName} style={styles.exerciseItemIcon} color={props.color}/>
      <ScrollView
        style={styles.exerciseItemTextContainer}
        showsVerticalScrollIndicator={false}
        justifyContent="center"
      >
      
        <Text style={styles.exerciseItemPlainText}>{props.description}</Text>
      </ScrollView>
     
     
       <View style={{paddingTop:'15%', paddingRight:'5%', flexDirection: "row",}}>
           <Text style={{fontSize:10}}>Подробнее</Text>
      <Ionicons name="arrow-redo-outline" size={24} color="#422b3a" />
      </View>
    </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  exerciseItemContainer: {
    width: "100%",
    height: 100,
    borderBottomColor: "#90a397",
    borderBottomWidth: 5,
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseItemIcon: { fontSize: 90 },
  exerciseItemTextContainer: {
    width: "60%",
    height: "94%",
    
    
  },

  exerciseItemNameText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color:'#422b3a'

  },
  exerciseItemPlainText: {
    textAlign: "justify",
    fontSize: 18,
    paddingLeft:'10%',
     color:'#422b3a'
    
  },
});