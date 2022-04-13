import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TabBar from "../Src/Components/TabBar";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";

export default function Customers(props) {
  const data = ["Customers", "Potentials", "Leads", "Reports"];
  const [indexofitem, setIndexofitem] = useState(0);
  const {setColor,color} = useData()
  const colors = ["#ef3365", "#26985d", "#1c98be", "yellow"];

  return (

    <View style={{  flexDirection:"row", flex:1, backgroundColor:"black" }}>
        
        <View style={{alignSelf:"center"}}>
          <Drawer  />
        </View> 
    
    <View>
      
      <TabBar
        txt={data}
        indexofitem={indexofitem}
        setIndexofitem={setIndexofitem}
        colors={colors}
      />
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
  );
}
