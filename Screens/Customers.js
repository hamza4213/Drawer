import { StyleSheet, Text, View } from 'react-native'
import React from
 'react'
import TabBar from '../Src/Components/TabBar'

export default function Customers() {
const data = [
    "Customers",
    "Potentials",
    "Leads",
    "Reports"
]
    return (
    <View>        
          <TabBar 
          txt={data}/>
          
      
    </View>
  )
}

const styles = StyleSheet.create({})