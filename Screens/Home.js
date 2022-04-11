import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Drawer from "../Src/Components/Drawer";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Drawer selectedcolor={"#ef3365"} />
        <Text style={{ color: "white", alignSelf: "center" }}>
          This is Home Screen
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    // alignItems: "center",
  },
});
