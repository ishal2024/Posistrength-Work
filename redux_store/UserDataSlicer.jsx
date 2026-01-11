import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userData : {},
    status : false
}

const userDataSlicer = createSlice({
    name : "user",
    initialState,
    reducers : {
        addUserData : (state , action) => {
            state.userData = action.payload,
            state.status = true
        },
        removeUser : (state,action) => {
            state.status = false,
            state.userData = {}
        }
    }
})

export const {addUserData , removeUser} = userDataSlicer.actions

export default userDataSlicer.reducer