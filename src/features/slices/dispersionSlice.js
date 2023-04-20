import {createSlice} from "@reduxjs/toolkit";
import {fetchDispersion} from "../actions/dispersionAction";

const dispersionSlice = createSlice({
    name:"dispersion",
    initialState:"",
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchDispersion.fulfilled,(state,action) => {
            console.log(action.payload)
            return action.payload
        })
        builder.addCase(fetchDispersion.rejected,(state,action) => {
            console.log("rejected");
            return (action.payload);
        })
    }
})
export default dispersionSlice.reducer