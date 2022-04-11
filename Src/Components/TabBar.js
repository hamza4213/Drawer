import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function TabBar(props) {
  const { txt, setIndexofitem, indexofitem } = props;
  // console.log(txt);
  return (
    <View
      style={{
        height: 97,
        width: "100%",
        // backgroundColor:"gray",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: 74,
          width: 71,
          backgroundColor: "white",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          style={{ width: 63, height: 61 }}
          source={require("../Icons/image.png")}
        />
        <View
          style={{
            height: 20,
            width: 55,
            backgroundColor: "#5F5F5F",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>CPA</Text>
        </View>
      </View>

      <View
        style={{
          height: 67,
          width: 323,
          marginTop: 14,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: 36,
            width: "90%",
            // flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E8E8E8",
            borderRadius: 15,
          }}
        >
          <FlatList
            data={txt}
            horizontal
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => {
              // console.log(item);
              // console.log(index);
              return (
                <TouchableOpacity
                  onPress={() => setIndexofitem(index)}
                  style={{
                    marginHorizontal: 5,
                    backgroundColor:
                      indexofitem === 0 && indexofitem == index
                        ? "#ef3365"
                        : indexofitem === 1 && indexofitem == index
                        ? "#26985d"
                        : indexofitem === 2 && indexofitem == index
                        ? "#1c98be"
                        : indexofitem === 3 && indexofitem == index
                        ? "yellow"
                        : "#E8E8E8",
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 178,
            height: 22,
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 17, width: 17 }}
            source={require("../Icons/Cross.png")}
          />
          <Text style={{ marginLeft: 5 }}>Registered Business</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
