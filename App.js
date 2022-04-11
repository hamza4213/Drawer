import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Customers from "./Screens/Customers";
import Drawer from "./Src/Components/Drawer";
import TabBar from "./Src/Components/TabBar";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown:false }}>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Customers" component={Customers} />
    //   </Stack.Navigator>
    //   </NavigationContainer> */}
      <Drawer />
      {/* <TabBar/> */}
      {/* <Customers /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
