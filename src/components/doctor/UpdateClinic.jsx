
import { useRef, useState } from "react"

import { useNavigate } from "react-router-dom"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"
import { useSelector } from "react-redux"

export default function UpdateClinic() {
    const userinfo = useSelector(state => state.authInfo.value)
    const clinicData = useSelector(state => state.clinicInfo.upData)
    console.log("clinci updaye slice data", clinicData)
    console.log("userinfo", userinfo.token)
    const navigate = useNavigate()

    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const recnameBox = useRef()
    const oldPassBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()


    const updateClinic = async (event) => {
        event.preventDefault()
        var ob = {
            name: recnameBox.current.value,
            phoneNumber: phoneBox.current.value,
            oldPassword: oldPassBox.current.value,
            password: passBox.current.value

        }
        console.log(ob)
        try {
            setLoading(true)
            const URL = ApiUrls.UPDATE_CLINIC + clinicData.id
            const result = await ApiService.putApiCall(URL, ob, userinfo.token)
            console.log("api result", result)
            if (result.data.status) {
                setMsg(result.data.msg)


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
                            <h4 className="text-center mb-4">Update Clinic Details</h4>
                            <p>{msg}</p>
                            <form onSubmit={updateClinic}>
                                <div className="row g-3">


                                    <div className="col-12 col-sm-6">
                                        <input type="text" ref={recnameBox} defaultValue={clinicData?.name} className="form-control bg-light border-0" placeholder="Receptionist Name" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={phoneBox} defaultValue={clinicData?.phoneNumber} className="form-control bg-light border-0" placeholder="Reception Contact" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <input type="password" ref={oldPassBox} defaultValue={clinicData?.password} className="form-control bg-light border-0" placeholder="Your Old Password" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="Your New Password" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 ">
                                        <button className="btn btn-primary w-100 py-3" type="submit">{loading ? "updating..." : "Update Clinic"}</button>
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