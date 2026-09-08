import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"
import { PatientListReducerForReception, updatePatientReducer } from "../../reduxData/PatientSlice"

export default function AppointmentList() {
    const userinfo = useSelector(state => state.authInfo.value)


    const newPatientList = useSelector(state => state.patientInfo.pValue)
    console.log("patientList from stiore", newPatientList)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")

    const viewlist = async () => {

        try {

            const response = await ApiService.GetApiCall(ApiUrls.PATIENTLIST_FORRECEPTION, userinfo.token)
            console.log("patient list", response)
            if (response.data.status) {
                const patientList = response.data.data
                console.log("patientList", patientList)
                dispatch(PatientListReducerForReception(response.data.data))
            } else {
                setMsg(response.data.msg)
            }

        } catch (error) {

        }


    }

    useEffect(() => {
        viewlist()
    }, [])

    const deactive = async (id) => {
        try {
            const URL = ApiUrls.APPOINTMENT_COMPLETE + id
            const response = await ApiService.putApiCall(URL, null, userinfo.token)

            console.log("deactive", response)


            if (response.data.status) {
                setMsg(response.data.msg)
                // const indexToUpdate = PatientList.findIndex(ob => ob.id === response.data.id)
                // if (indexToUpdate !== -1) {
                //     const updatedList = [...PatientList];
                //     updatedList.splice(indexToUpdate, 1, { ...PatientList[indexToUpdate], activeStatus: response.data.activeStatus })
                //     dispatch(patientStatusReducer(updatedList))
                // }
                viewlist()

            } else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const active = async (id) => {
        try {
            const URL = ApiUrls.APPOINTMNET_UNDO + id
            const response = await ApiService.putApiCall(URL, null, userinfo.token)

            console.log("active", response)
            if (response.data.status) {
                setMsg(response.data.msg)
                viewlist()
            }
            else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deletePatient = async (id) => {
        const status = window.confirm("Are you sure to delete this record ?")
        if (status) {
            const URL = ApiUrls.DELETE_APPOINTMENT + id
            const response = await ApiService.DeleteApiCall(URL, userinfo.token)
            if (response.data.status) {
                setMsg(response.data.msg)
                viewlist()
            } else {
                setMsg(response.data.msg)
            }
        } else {
            setMsg("Deleting Error...")
        }
    }

    const update = (ob) => {
        dispatch(updatePatientReducer(ob))
        navigate("/reception/updateappointment")
    }

    return <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ borderColor: "rgba(256, 256, 256, .3) !important" }}>View Appointments</h5>
                <h5>{msg}</h5>
            </div>
        </div>

        <div className="container-fluid pt-5">
            <div className="container">

                <div className="row justify-content-center position-relative" style={{ marginTop: "-170px", zIndex: "1" }}>
                    <div className="col-lg-12">

                        <table className="table table-border table-light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Contact</th>
                                    <th>Gender</th>
                                    <th>Problem</th>
                                    <th>App. Date</th>
                                    <th>App. Time</th>
                                    <th>Clinic Address</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newPatientList?.map((ob, index) => <tr><td>{index + 1}</td>
                                    <td>{ob.name}</td>
                                    <td>{ob.age}</td>
                                    <td>{ob.phoneNumber}</td>
                                    <td>{ob.gender}</td>

                                    <td>{ob.diagnosis}</td>
                                    <td>{ob.appointmentdate}</td>
                                    <td>{ob.time}</td>
                                    <td>{ob.address.raddress}</td>

                                    <td>{ob.activeStatus ? <button className="btn btn-primary" onClick={() => deactive(ob.id)} >Deactive</button> : <button className="btn btn-primary" onClick={() => active(ob.id)} >Activate</button>}</td>
                                    <td><button className="btn btn-primary" onClick={() => update(ob)} >Edit</button>&nbsp;<button className="btn btn-danger" onClick={() => deletePatient(ob.id)}>Delete</button></td>



                                </tr>)}

                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </>
}