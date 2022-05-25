import * as React from 'react';
import { useEffect } from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';
import Items from "./Items";
import Header from "./Header";

import { Card } from 'react-native-paper';



export default function App() {
   const backAction = () => {
    Alert.alert("Внимание!", "Вы точно хотите выйти?", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Да", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const renderItem = (item) => {
    return (
      <Items
        iconName={item.item.iconName}
        name={item.item.name}
        description={item.item.description}
        color={item.item.color}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  return (
    <View>
      <Header />
      <FlatList
        style={styles.exercisesFlatListContainer}
        data={exercisesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesFlatListContainer: { width: "100%", height: "89%" },
});

const exercisesData = [
  {
    id: 0,
    iconName: "car",
    name: "BMW X5",
    description:
      "4.350.000",
    color: 'red'
  },
  {
    id: 1,
    iconName: "car",
    name: "BMW 6 GT",
    description:
      "7.350.000",
    color:'blue'
  },
  {
    id: 2,
    iconName: "car",
    name: "BMW 4 Gran Coupe",
    description:
      "5.630.000",
        color:'green'
  },
  {
    id: 3,
    iconName: "car",
    name: "BMW M8 Cabrio",
    description:
      "19.000.000",
        color:'yellow'
  },
  {
    id: 4,
    iconName: "motorcycle",
    name: "BMW R 1250 RT",
    description:
      "2.390.000",
      color:'cyan'
  },
  {
    id: 5,
    iconName: "motorcycle",
    name: "BMW F 900 R",
    description:
      "1.980.000",
      color:'lime'
  },
  {
    id: 6,
    iconName: "bicycle",
    name: "BMW CRUISE BIKE",
    description: "113.400",
    color:'pink'
  },
];