import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"

export default function UpdateAppointment() {


    const userinfo = useSelector(state => state.authInfo.value)
    const patientData = useSelector(state => state.patientInfo.upData)
    console.log("patientData", patientData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    const nameBox = useRef()
    const phoneBox = useRef()
    const dateBox = useRef()

    const update = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            appointmentdate: dateBox.current.value,
            phoneNumber: phoneBox.current.value

        }
        try {
            const URL = ApiUrls.UPDATE_APPOINTMENT + patientData.id
            const response = await ApiService.putApiCall(URL, ob, userinfo.token)
            console.log(response)
            if (response.status) {
                setMsg(response.data.msg)
                setTimeout(() => {
                    navigate("/reception/appointmentlist")
                }, 2000)

            } else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            setMsg("Network error")
        }
    }


    return <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">

            </div>
        </div>
        <div className="container-fluid pt-5">
            <div className="container">

                <div className="row justify-content-center position-relative" style={{ marginTop: "-200px", zIndex: "1" }}>
                    <div className="col-lg-8">
                        <div className="bg-white rounded p-5 m-5 mb-0">
                            <h4 className="text-center mb-4">Update Appointment</h4>
                            <p>{msg}</p>
                            <form onSubmit={update}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" defaultValue={patientData.name} ref={nameBox} className="form-control bg-light border-0" placeholder="Patient Name" style={{ height: "55px" }} />
                                    </div>


                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={phoneBox} defaultValue={patientData.phoneNumber} className="form-control bg-light border-0" placeholder="Mobile" style={{ height: "55px" }} />
                                    </div>
                                    {/* <div className="col-12 col-sm-6">
                                        <input type="number" className="form-control bg-light border-0" placeholder="Reception Contact" style={{ height: "55px" }} />
                                    </div> */}

                                    <div className="col-12 col-sm-6">
                                        <input type="date" ref={dateBox} className="form-control bg-light border-0" defaultValue={patientData.appointmentdate} placeholder="Appointment Date" style={{ height: "55px" }} />
                                    </div>


                                    <div className="col-12 ">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Update Patient</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}