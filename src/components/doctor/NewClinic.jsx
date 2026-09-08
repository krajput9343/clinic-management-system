
import { useRef, useState } from "react"

import { useNavigate } from "react-router-dom"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"
import { useSelector } from "react-redux"
function NewClinic() {

    const userinfo = useSelector(state => state.authInfo.value)

    console.log("userinfo", userinfo.token)
    const navigate = useNavigate()

    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const clinicbox = useRef()
    const recnameBox = useRef()
    const emailBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()


    const addNewClinic = async (event) => {
        event.preventDefault()
        var ob = {
            name: recnameBox.current.value,
            phoneNumber: phoneBox.current.value,
            email: emailBox.current.value,
            password: passBox.current.value,
            raddress: clinicbox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const result = await ApiService.PostApiCallWithToken(ApiUrls.CLINIC_SAVE, ob, userinfo.token)
            console.log("api result", result)
            if (result.status) {
                setMsg(result.data.msg)
                recnameBox.current.value = " "
                phoneBox.current.value = ""
                emailBox.current.value = ""
                passBox.current.value = ""
                clinicbox.current.value = ""

                navigate('/doctor/viewclinic')
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
                            <h4 className="text-center mb-4">Register New Clinic</h4>
                            <p>{msg}</p>
                            <form onSubmit={addNewClinic}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" ref={clinicbox} className="form-control bg-light border-0" placeholder="Clinic Name/Address" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <input type="text" ref={recnameBox} className="form-control bg-light border-0" placeholder="Receptionist Name" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={phoneBox} className="form-control bg-light border-0" placeholder="Reception Contact" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <input type="email" ref={emailBox} className="form-control bg-light border-0" placeholder="Email Address" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="password" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 ">
                                        <button className="btn btn-primary w-100 py-3" type="submit">{loading ? "adding..." : "Add Clinic"}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}

    </>
}
export default NewClinic