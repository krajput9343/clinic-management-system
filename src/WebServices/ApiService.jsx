import axios from "axios"
class ApiService {

    PostApiCall(url, data) {
        return axios.post(url, data, {
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    PostApiCallWithToken(url, data, token) {
        return axios.post(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    GetApiCall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    DeleteApiCall(url, token) {
        return axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    putApiCall(url, data, token) {
        return axios.put(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}

export const ApiUrls = {
    REGISTER_API: '/auth/doctor/save',
    LOGIN_API: '/auth/login',
    CLINIC_SAVE: '/api/reception/save',
    CLINIC_LIST: '/api/reception/lists',
    DELETE_CLINIC: '/api/reception/delete/',
    UPDATE_CLINIC: '/api/reception/updateReception/',
    PATIENT_LIST: '/api/patient/list',
    PATIENTLIST_FORRECEPTION: '/api/patient/lists',
    NEW_APPOINTMENT: '/api/patient/addpatient',
    UPDATE_APPOINTMENT: '/api/patient/update/',
    DELETE_APPOINTMENT: '/api/patient/delete/',
    APPOINTMENT_COMPLETE: '/api/patient/done/',
    APPOINTMNET_UNDO: '/api/patient/undo/'
}



export default new ApiService()