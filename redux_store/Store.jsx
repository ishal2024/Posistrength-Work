import {configureStore} from '@reduxjs/toolkit'
import userDataReducer from './UserDataSlicer'
import BookingProcessReducer from './BookingSlicer'
import HomePageReducer from './HomePageSlicer'
import FindBusReducer from './FindBusSlicer'

export const store = configureStore({
    reducer : {
       user : userDataReducer,
       booking : BookingProcessReducer,
       home : HomePageReducer,
       search : FindBusReducer
    }
})

