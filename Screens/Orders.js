import { StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";
import { SafeAreaView } from "react-native-safe-area-context";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Orders({navigation}) {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  const {color,setColor,expanded,setExpanded,setIndex}= useData()
  useEffect(() => {
    setColor("#ef3365")
    setIndex(4)
    return () => {
setIndex(3)    };
  }, []);
  return (
    <GestureRecognizer
        onSwipeUp={(state) => navigation.navigate("Suppliers")}
        onSwipeDown={(state) => navigation.navigate("Store")}
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
          This is Orders Screen
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
