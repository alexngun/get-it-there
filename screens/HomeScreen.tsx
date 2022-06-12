import { View, Image, Text, StyleSheet } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete, PlaceType } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"

import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { placeType, setDestination, setOrigin } from '../redux/navSlicer'
import NavFavourites from '../components/NavFavourites'

export default function HomeScreen() {

    const dispatch = useDispatch()

    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image source={{uri: "https://links.papareact.com/gzs"}} style={{width:100, height:100, resizeMode:'contain'}}/>
                <GooglePlacesAutocomplete 
                    nearbyPlacesAPI="GooglePlacesSearch" 
                    placeholder="Where From" 
                    debounce={400}
                    styles = {{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details?.geometry.location,
                            description: data.description
                        }))
                    }}
                    minLength={2}
                    fetchDetails={true}
                    
                    enablePoweredByContainer={true}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                />
                <NavOptions/>
                <NavFavourites/>
            </View>
        </View>
    )
}

