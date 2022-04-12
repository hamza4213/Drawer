import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Customers from "./Screens/Customers";
import Drawer from "./Src/Components/Drawer";
import TabBar from "./Src/Components/TabBar";
import Home from "./Screens/Home";
import React, { useState } from "react";
import { DataProvider } from "./Src/Hooks/useData";
const Stack = createStackNavigator();

export default function App() {
 
  
  return (
    <DataProvider>
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Customers" component={Customers} />
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
