import { StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Home({navigation}) {
  const config = {
    velocityThreshold: 1,
    directionalOffsetThreshold: 80
  };
  useEffect(() => {
    setColor("#ef3365")
    setIndex(0)
  }, []);
  const {color,setColor,expanded,setExpanded,setIndex}= useData()
  return (
    <GestureRecognizer
        onSwipeUp={(state) => navigation.navigate("BookKeeping")}
        onSwipeLeft={(state) => setExpanded(false)}
        onSwipeRight={(state) => setExpanded(true)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: "teal"
        }}
        >
      <View style={styles.container}>
        <Drawer />
        <Text style={styles.text}>
          This is Home Screen
        </Text>
      </View>
    </GestureRecognizer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection:"row"
  },
  text:{
    color: "white", 
    alignSelf: "center"
  }
});
