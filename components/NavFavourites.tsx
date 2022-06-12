import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

type favType = {
  id: string,
  icon: string,
  location: string,
  destination: string
}

type dataProps = Array<favType>

const data : dataProps = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "San Francisco, CA, USA"
  },
  {
    id: "345",
    icon: "briefcase",
    location: "Work",
    destination: "Facebook Headquarters, Hacker Way, Menlo Park, CA, USA"
  },
]

export default function NavFavourites() {
  return (
    <FlatList 
      data={data}
      ItemSeparatorComponent={()=>
        <View
          style={[tw`bg-gray-200`, { height: 0.5}]}
        />
      }
      keyExtractor={item=>item.id} renderItem={( {item : {location, destination, icon} } )=>
        <TouchableOpacity style={tw`flex-row items-center py-4 px-4 w-5/6`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    }/>
  )
}