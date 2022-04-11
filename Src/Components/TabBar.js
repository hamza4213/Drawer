import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TabBar(props) {
    const {txt, txt2,txt3,txt4} = props;
  return (
    <View style={{
        height:97,
        width:'100%',
        // backgroundColor:"gray",
        flexDirection:"row"
    }}>
      <View style={{height:74,width:71,backgroundColor:"white",alignItems:"center",margin:10}}>
        <Image style={{width:63,height:61,}} source={require('../Icons/image.png')}/>
            <View style={{height:20,width:55,backgroundColor:"#5F5F5F",alignItems:"center",justifyContent:'center',borderRadius:10}}>
                <Text style={{color:'white',fontSize:10}}>CPA</Text>
            </View>
      </View>

    <View style={{height:67,width:323,marginTop:14,justifyContent:"space-between"}}>
        <View style={{height:36,width:"90%",flexWrap:"wrap",justifyContent:"space-evenly",backgroundColor:"#E8E8E8",borderRadius:15}}>
            <TouchableOpacity>
                <Text>{txt}</Text>
            </TouchableOpacity> 

        </View>
        <View style={{flexDirection:"row",width:178,height:22,alignItems:"center"}}>
            <Image style={{height:17,width:17}} source={require('../Icons/Cross.png')}/>
            <Text style={{marginLeft:5}}>Registered Business</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})