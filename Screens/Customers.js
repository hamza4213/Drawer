import { StyleSheet, Text, View } from "react-native";
import React, { useState ,useEffect} from "react";
import TabBar from "../Src/Components/TabBar";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Customers({navigation}) {
  const data = ["Customers", "Potentials", "Leads", "Reports"];
  const [indexofitem, setIndexofitem] = useState(0);
  const {color,setColor,expanded,setExpanded}= useData()
  const colors = ["#ef3365", "#26985d", "#1c98be", "yellow"];
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  useEffect(() => {
    setColor("#ef3365")
  }, []);
  return (
    <GestureRecognizer
        onSwipeUp={(state) => navigation.navigate("Store")}
        onSwipeDown={(state) => navigation.navigate("BookKeeping")}
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
      <View style={{width:"100%"}}>
      <TabBar
        txt={data}
        indexofitem={indexofitem}
        setIndexofitem={setIndexofitem}
        colors={colors}
      />
      </View>
      {indexofitem === 0 ? (
          <Text style={{ alignSelf: "center" }}>Customers Component here</Text>
      ) : indexofitem === 1 ? (
        <Text style={{ alignSelf: "center" }}>Potentials Component here</Text>
      ) : indexofitem === 2 ? (
        <Text style={{ alignSelf: "center" }}>Leads Component here</Text>
      ) : indexofitem === 3 ? (
        <Text style={{ alignSelf: "center" }}>Reports Component here</Text>
      ) : null}

      </View>    
    </View>
    </GestureRecognizer>
  );
}
