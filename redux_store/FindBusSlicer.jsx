const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    from : "",
    to : "",
    date : ""
}

const FindBusSlicer = createSlice({
    name : "search",
    initialState,
    reducers : {
        addFromPoint : (state , actions) => {
            state.from = actions.payload
        },
        addToPoint : (state , actions) => {
            state.to = actions.payload
        },
        addDate : (state , actions) => {
            state.date = actions.payload
        }
    }
})

export const {addFromPoint , addToPoint , addDate} = FindBusSlicer.actions

export default FindBusSlicer.reducer