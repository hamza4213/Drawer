import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Customers from "./Screens/Customers";
import Drawer from "./Src/Components/Drawer";
import TabBar from "./Src/Components/TabBar";
import Home from "./Screens/Home";
import React, { useState } from "react";
const Stack = createStackNavigator();

export default function App() {
  const colors = ["#ef3365", "#26985d", "#1c98be", "yellow"];
  const [selectedcolor, setSelectedcolor] = useState("#ef3365");
  console.log("App js selcted color", selectedcolor);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Customers" component={Customers} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Drawer selectedcolor={selectedcolor} />
    //   {/* <TabBar /> */}
    //   <Customers colors={colors} setSelectedcolor={setSelectedcolor} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
