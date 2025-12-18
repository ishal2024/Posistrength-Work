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
    }
})

export const {addUserData} = userDataSlicer.actions

export default userDataSlicer.reducer