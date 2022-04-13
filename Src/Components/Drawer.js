import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../Hooks/useData";

export default function Drawer(props) {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation();
  const {color}= useData()
useEffect(() => {
  
  return () => {
    
  };
}, [color]);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {expanded && (
        <View
          style={{
            backgroundColor: color,
            width: 62,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("Home")}
          style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Home.png")}
              />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("BookKeeping")} 
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/BookKeeping.png")}
              />
              <Text style={styles.text}>BookKeeping</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Customers")}
              style={styles.touch}
            >
              <Image
                style={styles.image}
                source={require("../Icons/User.png")}
              />
              <Text style={styles.text}>Customers</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Store")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Store.png")}
              />
              <Text style={styles.text}>Store</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Orders")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Orders.png")}
              />
              <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Suppliers")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Supplier.png")}
              />
              <Text style={styles.text}>Suppliers</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Messages")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Chat.png")}
              />
              <Text style={styles.text}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Employees")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Employees.png")}
              />
              <Text style={styles.text}>Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Projects")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Project.png")}
              />
              <Text style={styles.text}>Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Contracts")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/clipboard.png")}
              />
              <Text style={styles.text}>Contracts</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Clouds")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Cloud.png")}
              />
              <Text style={styles.text}>Clouds</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Editor")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/brush.png")}
              />
              <Text style={styles.text}>Editor</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Calender")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/calendar.png")}
              />
              <Text style={styles.text}>Calender</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Assets")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Digital.png")}
              />
              <Text style={styles.text}>Digital Assets</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Promotion")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Promotion.png")}
              />
              <Text style={styles.text}>Promotion</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Bots")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Bot.png")}
              />
              <Text style={styles.text}>Bots</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("Settings")}
            style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Settings.png")}
              />
              <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
      <TouchableOpacity
        style={{
          height: 55,
          width: 19,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: color,
        }}
        onPress={handlePress}
      >
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 19.5,
    width: 19,
  },
  text: {
    fontSize: 8,
    fontWeight: "bold",
    marginTop: 5,
    color: "white",
  },
  touch: {
    alignItems: "center",
    marginVertical: 10,
  },
});
