import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    busData: {},
    routeData: {},
    selectedSeats: [],
    locations : {
        pickupPoint : {} , 
        dropoffPoint : {}
    },
    passengerDetails : {}
}


const BookingSlicer = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addData: (state, action) => {
            // Note :- Konse type ka data bhej rahe ho reducer ko jo initialState mai chnage karega to iks eliye initial state ka key aur action ka dataType ka value same hona chhaiye 
            const { dataType, data } = action.payload;
            state[dataType] = data;
        },

        addBoardingPoints : (state , action) => {
             state.locations.pickupPoint = action.payload
        },
        addDroppingPoints : (state , action) => {
             state.locations.dropoffPoint = action.payload
        }
    }
})

export const {addData , addBoardingPoints , addDroppingPoints} = BookingSlicer.actions

export default BookingSlicer.reducer