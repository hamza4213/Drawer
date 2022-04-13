import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import Drawer from "../Src/Components/Drawer";
import { useData } from "../Src/Hooks/useData";
import TabBar from "../Src/Components/TabBar";

export default function BookKeeping() {
  const data = ["Products", "Inventry", "Manufactur", "Reports"];
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
