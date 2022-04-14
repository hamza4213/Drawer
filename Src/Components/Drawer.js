import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../Hooks/useData";

export default function Drawer(props) {
  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation();
  const {color,setColor,expanded,setExpanded,ind}= useData()
useEffect(() => {
  
  return () => {
    
  };
}, [color]);

const DATA = [
  {
    imgsrc:require("../Icons/Home.png"),
    name:"Home",
  },
  {
    imgsrc:require("../Icons/BookKeeping.png"),
    name:"BookKeeping"
  },
  {
    imgsrc:require("../Icons/User.png"),
    name:"Customers"
  },
  {
    imgsrc:require("../Icons/Store.png"),
    name:"Store"
  },
  {
    imgsrc:require("../Icons/Orders.png"),
    name:"Orders"
  },
  {
    imgsrc:require("../Icons/Supplier.png"),
    name:"Suppliers"
  },
  {
    imgsrc:require("../Icons/Chat.png"),
    name:"Messages"
  },
  {
    imgsrc:require("../Icons/Employees.png"),
    name:"Employees"
  },
  {
    imgsrc:require("../Icons/Project.png"),
    name:"Projects"
  },
  {
    imgsrc:require("../Icons/clipboard.png"),
    name:"Contracts"
  },
  {
    imgsrc:require("../Icons/Cloud.png"),
    name:"Clouds"
  },
  {
    imgsrc:require("../Icons/brush.png"),
    name:"Editor"
  },
  {
    imgsrc:require("../Icons/calendar.png"),
    name:"Calender"
  },
  {
    imgsrc:require("../Icons/Digital.png"),
    name:"Assets"
  },
  {
    imgsrc:require("../Icons/Promotion.png"),
    name:"Promotion"
  },
  {
    imgsrc:require("../Icons/Bot.png"),
    name:"Bots"
  },
  {
    imgsrc:require("../Icons/Settings.png"),
    name:"Settings"
  }
]

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop:40 }}>
      {expanded && (
        <View
          style={{
            backgroundColor: color,
            width: 62,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatList showsVerticalScrollIndicator={false} 
          data={DATA} 
          keyExtractor={item=>item.name} 
          renderItem={({item,index})=>{
            // console.log(index)
            return(
             <TouchableOpacity 
             onPress={()=>navigation.navigate(item.name)}
             style={{  alignItems: "center",
    marginVertical: 10,}}>
                 <Image
                   style={{ height:index===ind?21: 19.5,
                    width:index===ind?21: 19,}}
                   source={item.imgsrc}
                 />
                 <Text style={{  fontSize:index===ind?10: 8,
    fontWeight: index===ind?"bold":"normal",
    marginTop: 5,
    color: "white",}}>{item.name}</Text>
               </TouchableOpacity>)
          }}
        />
          
        </View>
      )}
      <TouchableOpacity
        style={{
          height: 55,
          width: 25,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: color,
        }}
        onPress={handlePress}
      >
        <Image style={{height:60,width:18}}source={require('../Icons/Parallel.png')}/>
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
    // fontWeight: "bold",
    marginTop: 5,
    color: "white",
  },
  touch: {
    alignItems: "center",
    marginVertical: 10,
  },
});
