import React, { useRef, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectNav, setTravelTime } from '../redux/navSlicer'
import { GOOGLE_MAPS_APIKEY } from "@env"

function Map() {

    const { origin, destination } = useSelector(selectNav)
    const mapRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!origin || !destination) return;

        mapRef!.current!.fitToSuppliedMarkers(['origin', 'destination'],
            { edgePadding: { top:50, right:50, bottom:50, left:50} }
        )
    }, [origin, destination])

    useEffect(()=> {

        if (!origin || !destination) return;

        const getTravel = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}
            `
            fetch(URL)
                .then(res=>res.json())
                .then(data=>dispatch(setTravelTime(data.rows[0].elements[0])))
        }

        getTravel();
    }, [origin, destination, GOOGLE_MAPS_APIKEY])
    

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin!.location!.lat,
                longitude: origin!.location!.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    )
}

export default Map