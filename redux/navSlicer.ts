import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from 'react-native-google-places-autocomplete'
import { RootState } from './store'

const initialState : stateType = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

interface placeType {
    location: Point | undefined,
    description: string
}

interface stateType {
    origin: placeType | null,
    destination: placeType | null,
    travelTimeInformation: number | null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<placeType>) => {
            state.origin = action.payload
        },
        setDestination: (state, action: PayloadAction<placeType>) => {
            state.destination = action.payload
        },
        setTravelTime: (state, action: PayloadAction<number>) => {
            state.travelTimeInformation = action.payload
        },
    }
})

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions
export const selectNav = ( state : RootState ) => state.nav
export { placeType, stateType }
export default navSlice.reducer