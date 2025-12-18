import {configureStore} from '@reduxjs/toolkit'
import userDataReducer from './UserDataSlicer'

export const store = configureStore({
    reducer : {
       user : userDataReducer
    }
})

