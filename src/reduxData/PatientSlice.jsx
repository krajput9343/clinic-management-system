import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "patient",
    initialState: {
        value: [],
        upData: undefined,
        pValue: []

    },
    reducers: {
        PatientListReducer: (state, action) => {
            state.value = action.payload
            console.log("clinic slice", action.payload)
        },
        updatePatientReducer: (state, action) => {
            state.upData = action.payload
        },
        patientStatusReducer: (state, action) => {
            state.value = action.payload
        },
        PatientListReducerForReception: (state, action) => {
            state.pValue = action.payload
            console.log("clinic slice", action.payload)
        },
    }
})

export const { PatientListReducer, updatePatientReducer, patientStatusReducer, PatientListReducerForReception } = slice.actions
export default slice.reducer