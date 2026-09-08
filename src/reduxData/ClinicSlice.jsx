import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "clinic",
    initialState: {
        value: [],
        upData: undefined

    },
    reducers: {
        ClinicListReducer: (state, action) => {
            state.value = action.payload
            console.log("clinic slice", action.payload)
        },
        updateClinicReducer: (state, action) => {
            state.upData = action.payload
        }
    }
})

export const { ClinicListReducer, updateClinicReducer } = slice.actions
export default slice.reducer