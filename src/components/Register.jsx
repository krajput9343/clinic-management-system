
import { useRef, useState } from "react"
import ApiService, { ApiUrls } from "../WebServices/ApiService"
import { useNavigate } from "react-router-dom"
function Register() {

    const navigate = useNavigate()

    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const nameBox = useRef()
    const emailBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()


    const register = async (event) => {
        event.preventDefault()
        var ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            email: emailBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const result = await ApiService.PostApiCall(ApiUrls.REGISTER_API, ob)
            console.log("api result", result)
            if (result.status) {
                setMsg(result.data.msg)
                nameBox.current.value = " "
                phoneBox.current.value = ""
                emailBox.current.value = ""
                passBox.current.value = ""

                navigate('/login')
            }


        } catch (error) {
            console.log("error", error)
            setMsg("Network Error !")
        } finally {
            setLoading(false)
        }

    }


    return <>


        <div className="container-fluid pt-5">
            <div className="container">

                <div className="row justify-content-center position-relative" style={{ marginTop: "-200px", zIndex: "1" }}>
                    <div className="col-lg-8">
                        <div className="bg-white rounded p-5 m-5 mb-0">
                            <h4 className="text-center mb-4">Register Here</h4>
                            <p>{msg}</p>
                            <form onSubmit={register}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" ref={nameBox} className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="number" ref={phoneBox} className="form-control bg-light border-0" placeholder="contact " style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <input type="email" ref={emailBox} className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="password" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">{loading ? "signingup..." : "signUp"}</button>
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
export default Register