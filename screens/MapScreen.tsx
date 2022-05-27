import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'


function MapScreen() {

  const navigation = useNavigation()
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
        <View style={tw`h-1/2`}>
          <Text onPress={()=>navigation.goBack()}> Back </Text>
          <Map/>
        </View>
        <View style={tw`h-1/2`}></View>
    </SafeAreaView>
  )
}

export default MapScreen