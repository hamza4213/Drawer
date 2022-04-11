import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import Customers from "../../Screens/Customers";
export default function Drawer(props) {
  const [expanded, setExpanded] = useState(false);
  const { selectedcolor } = props;
  const handlePress = () => setExpanded(!expanded);
  // console.log(selectedcolor);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {expanded && (
        <View
          style={{
            backgroundColor: selectedcolor,
            width: 62,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.touch}>
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

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Store.png")}
              />
              <Text style={styles.text}>Store</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Orders.png")}
              />
              <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Supplier.png")}
              />
              <Text style={styles.text}>Suppliers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Chat.png")}
              />
              <Text style={styles.text}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Employees.png")}
              />
              <Text style={styles.text}>Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Project.png")}
              />
              <Text style={styles.text}>Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/clipboard.png")}
              />
              <Text style={styles.text}>Contracts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Cloud.png")}
              />
              <Text style={styles.text}>Clouds</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/brush.png")}
              />
              <Text style={styles.text}>Editor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/calendar.png")}
              />
              <Text style={styles.text}>Calender</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Digital.png")}
              />
              <Text style={styles.text}>Digital Assets</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Promotion.png")}
              />
              <Text style={styles.text}>Promotion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
              <Image
                style={styles.image}
                source={require("../Icons/Bot.png")}
              />
              <Text style={styles.text}>Bots</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch}>
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
          // marginLeft: 1.5,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: selectedcolor,
          // position: "relative",
          // marginTop: "50%",
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
