import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { multiply } from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectNav } from '../redux/navSlicer'

type Props = {}

type dataType = {
  id: string,
  title: string,
  multiplier: number,
  image: string
}

const data:Array<dataType> = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
 },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
 },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
 },
]

const SURGE_CHARGE_RATE = 1.5

function RideOptionsCard({}: Props) {

  const navigation = useNavigation()
  const [selected, setSelected] = useState<dataType|null>(null)
  const { travelTimeInformation } = useSelector(selectNav)
  console.log(travelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
          <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("NavigateCard" as never)} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
            <Icon name="chevron-left" type="fontawesome"/>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data} keyExtractor={item=>item.id}
          renderItem={ ({item}) => (
            <TouchableOpacity style={tw`flex-row justify-between items-center px-6 ${item.id == selected?.id && 'bg-gray-200'}`} onPress={()=>setSelected(item)}>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain"
                }}
                source={{uri:item.image}}
              />
              <View style={tw`-ml-10`}>
                <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
                <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
              </View>
              <Text style={tw`text-lg`}>{new Intl.NumberFormat('en-us', {style: 'currency', currency: 'CAD'}).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100 )}</Text>
            </TouchableOpacity>
          )}
        />

        <View>
          <TouchableOpacity style={tw`bg-black py-3 m-3`}>
            <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

function item(item: any): void {
  throw new Error('Function not implemented.')
}
