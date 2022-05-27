import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, Image, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectNav } from '../redux/navSlicer'

type Props = {}

interface dataType {
    id: String,
    title: String,
    image: String,
    screen: String
}

const data : Array<dataType> = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]

function NavOptions({}: Props) {

    const navigation = useNavigation()
    const { origin } = useSelector(selectNav);

    return (
        <FlatList
        data={data}
        horizontal
        keyExtractor={ item => item.id.toString()  }
        renderItem={ ({item})=> (
            <TouchableOpacity
                disabled={!origin}
                onPress={()=>navigation.navigate(item.screen as never)} 
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View style={tw`${!origin ? 'opacity-20' : ''}`}>
                    <Image source={ {uri: item.image.toString()} } style={{width:100, height:100, resizeMode:'contain'}}/>
                    <Text style={tw`mt-2 text-lg font-semibold`}> {item.title} </Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} type='antdesign' name='arrowright' color='white' tvParallaxProperties={undefined}/>
                </View>
            </TouchableOpacity>
        ) }
        />

    )
}

export default NavOptions