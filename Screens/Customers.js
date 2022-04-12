import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TabBar from "../Src/Components/TabBar";
import Drawer from "../Src/Components/Drawer";

export default function Customers(props) {
  const data = ["Customers", "Potentials", "Leads", "Reports"];
  const [indexofitem, setIndexofitem] = useState(null);
  const { setSelectedcolor, colors } = props;
  return (
    <View style={{ justifyContent: "center", flexDirection:"row",alignItems: "center", flex: 1 }}>
         
         <View>
         <Drawer selectedcolor={"#ef3365"} />
           </View> 
        
      <TabBar
        txt={data}
        indexofitem={indexofitem}
        setIndexofitem={setIndexofitem}
        setSelectedcolor={setSelectedcolor}
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
  );
}

const styles = StyleSheet.create({});
