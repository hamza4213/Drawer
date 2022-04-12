import { StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";

export default function Home() {
  const  {color,setColor} = useData()
  // const = data
  // useEffect(() => {
  //   setColor("#26985d")
  //   return () => {
  //   };
  // }, []);
  return (
    <>
      <View style={styles.container}>
        <Drawer />
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
