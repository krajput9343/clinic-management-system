import { configureStore } from "@reduxjs/toolkit";
import authSlice from './AuthSlice'
import ClinicSlice from "./ClinicSlice"
import PatientSlice from "./PatientSlice"
const store = configureStore({
    reducer: {
        authInfo: authSlice,
        clinicInfo: ClinicSlice,
        patientInfo: PatientSlice
    }
})

export default store;