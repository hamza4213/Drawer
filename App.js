import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import BookKeeping from "./Screens/BookKeeping";
import Customers from "./Screens/Customers";
import Store from "./Screens/Store";
import Orders from "./Screens/Orders";
import Suppliers from "./Screens/Suppliers";
import Messages from "./Screens/Messages";
import Employees from "./Screens/Employees";
import Projects from "./Screens/Projects";
import Contracts from "./Screens/Contracts";
import Clouds from "./Screens/Clouds";
import Editor from "./Screens/Editor";
import Calender from "./Screens/Calender";
import Assets from "./Screens/Assets";
import Promotion from "./Screens/Promotion";
import Bots from "./Screens/Bots";
import Settings from "./Screens/Settings";
import { DataProvider } from "./Src/Hooks/useData";
const Stack = createStackNavigator();

export default function App() {

  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Customers" component={Customers} />
        <Stack.Screen name="BookKeeping" component={BookKeeping}/>
        <Stack.Screen name="Store" component={Store}/>
        <Stack.Screen name="Orders" component={Orders}/>
        <Stack.Screen name="Suppliers" component={Suppliers}/>
        <Stack.Screen name="Messages" component={Messages}/>
        <Stack.Screen name="Employees" component={Employees}/>
        <Stack.Screen name="Projects" component={Projects}/>
        <Stack.Screen name="Contracts" component={Contracts}/>
        <Stack.Screen name="Clouds" component={Clouds}/>
        <Stack.Screen name="Editor" component={Editor}/>
        <Stack.Screen name="Calender" component={Calender}/>
        <Stack.Screen name="Assets" component={Assets}/>
        <Stack.Screen name="Promotion" component={Promotion}/>
        <Stack.Screen name="Bots" component={Bots}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
}