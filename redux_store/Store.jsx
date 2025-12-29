import {configureStore} from '@reduxjs/toolkit'
import userDataReducer from './UserDataSlicer'
import BookingProcessReducer from './BookingSlicer'

export const store = configureStore({
    reducer : {
       user : userDataReducer,
       booking : BookingProcessReducer
    }
})

