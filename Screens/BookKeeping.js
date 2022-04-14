import { StyleSheet, Text, View } from "react-native";
import React,{useState,useEffect} from "react";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";
import TabBar from "../Src/Components/TabBar";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function BookKeeping({navigation}) {
  const data = ["Products", "Inventry", "Manufactur", "Reports"];
  const [indexofitem, setIndexofitem] = useState(0);
  const colors = ["#ef3365", "#26985d", "#1c98be", "yellow"];
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  const {color,setColor,expanded,setExpanded}= useData()
  useEffect(() => {
    setColor("#ef3365")
  }, []);
  return (
    <GestureRecognizer
        onSwipeUp={(state) => navigation.navigate("Customers")}
        onSwipeDown={(state) => navigation.navigate("Home")}
        onSwipeLeft={(state) => setExpanded(false)}
        onSwipeRight={(state) => setExpanded(true)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: "teal"
        }}
        >    
    <View style={{  flexDirection:"row", flex:1, backgroundColor:"black" }}>
          <Drawer  />
<View>
  <View style={{width:"100%",}}>
  <TabBar
    txt={data}
    indexofitem={indexofitem}
    setIndexofitem={setIndexofitem}
    colors={colors}
  />
  </View>
  {indexofitem === 0 ? (
      <Text style={styles.text}>Customers Component here</Text>
  ) : indexofitem === 1 ? (
    <Text style={styles.text}>Potentials Component here</Text>
  ) : indexofitem === 2 ? (
    <Text style={styles.text}>Leads Component here</Text>
  ) : indexofitem === 3 ? (
    <Text style={styles.text}>Reports Component here</Text>
  ) : null}

  </View>    
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
