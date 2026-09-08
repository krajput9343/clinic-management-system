import { useRef, useState } from "react"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function NewAppointment() {



    const userinfo = useSelector(state => state.authInfo.value)

    console.log("userinfo", userinfo.token)
    const navigate = useNavigate()

    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const pNameBox = useRef()
    const ageBox = useRef()
    const genBox = useRef()
    const contectBox = useRef()
    const appDateBox = useRef()
    const timeBox = useRef()
    const diagnosisBox = useRef()




    const newAppointment = async (event) => {
        event.preventDefault()
        var ob = {
            name: pNameBox.current.value,
            phoneNumber: contectBox.current.value,
            gender: genBox.current.value,
            age: ageBox.current.value,
            appointmentdate: appDateBox.current.value,
            time: timeBox.current.value,
            diagnosis: diagnosisBox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const result = await ApiService.PostApiCallWithToken(ApiUrls.NEW_APPOINTMENT, ob, userinfo.token)
            console.log("api result", result)
            if (result.status) {
                setMsg(result.data.msg)


                navigate('/reception/appointmentlist')
            }


        } catch (error) {
            console.log("error", error)
            setMsg("Network Error !")
        } finally {
            setLoading(false)
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
                            <h4 className="text-center mb-4">New Appointment</h4>
                            {/* <p>{msg}</p> */}
                            <form onSubmit={newAppointment}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" ref={pNameBox} className="form-control bg-light border-0" placeholder="Patient Name" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <select name="gender" ref={genBox} className="form-control bg-light border-0" placeholder="Gender" style={{ height: "55px" }} >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={ageBox} className="form-control bg-light border-0" placeholder="Age" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={contectBox} className="form-control bg-light border-0" placeholder="Mobile" style={{ height: "55px" }} />
                                    </div>
                                    {/* <div className="col-12 col-sm-6">
                                        <input type="number" className="form-control bg-light border-0" placeholder="Reception Contact" style={{ height: "55px" }} />
                                    </div> */}

                                    <div className="col-12 col-sm-6">
                                        <input type="date" className="form-control bg-light border-0" ref={appDateBox} placeholder="Appointment Date" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="time" ref={timeBox} className="form-control bg-light border-0" placeholder="Time" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" ref={diagnosisBox} className="form-control bg-light border-0" placeholder="Diagnosis For" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 ">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Add Patient</button>
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