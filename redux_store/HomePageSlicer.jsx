import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status : false,
    aboutData : [],
    blogData : [],
    customerFeedback : []
}


const HomePageSlicer = createSlice({
    name : 'home',
    initialState,
    reducers : {
        addData : (state,actions) => {
            // console.log(actions.payload)
            state.status = true
            state.aboutData = actions.payload?.about || []
            state.blogData = actions.payload?.blog || []
            state.customerFeedback = actions.payload?.customer || []
        }
    }
})

export const {addData} = HomePageSlicer.actions

export default HomePageSlicer.reducer