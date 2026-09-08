import { useRef, useState } from "react"
import ApiService, { ApiUrls } from "../WebServices/ApiService"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AuthReducer } from "../reduxData/AuthSlice"

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    // const [userData, setUserData] = useState({})
    const emailBox = useRef()
    const passBox = useRef()
    // console.log("userdata", userData)

    const login = async (event) => {
        event.preventDefault()
        var ob = {
            email: emailBox.current.value,
            password: passBox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const result = await ApiService.PostApiCall(ApiUrls.LOGIN_API, ob)
            console.log("api result", result)
            if (result.status) {
                setMsg(result.data.msg)

                // let data = {
                //     token: result.data.data.token,
                //     name: result.data.data.user.name,
                //     type: result.data.data.userType,
                //     id: result.data.data.user.id,
                //     isLogin: true,
                //     email: result.data.data.user.email

                // }

                // setUserData(data)


                const d = dispatch(AuthReducer({
                    token: result.data.data.token,
                    name: result.data.data.user.name,
                    type: result.data.data.userType,
                    id: result.data.data.user.id,
                    isLogin: true,
                    email: result.data.data.user.email

                }))
                console.log("dispatch function", d)


                emailBox.current.value = ""
                passBox.current.value = ""


                if (result.data.data.userType == "doctor") {
                    navigate('/doctor/dashboard')
                } else {
                    navigate("/")
                }
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
                            <h4 className="text-center mb-4">Login  Here</h4>
                            <p>{msg}</p>
                            <form onSubmit={login}>
                                <div className="row g-3">


                                    <div className="col-12 col-sm-6">
                                        <input type="email" ref={emailBox} className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" ref={passBox} className="form-control bg-light border-0" placeholder="password" style={{ height: "55px" }} />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">{loading ? "Signingin...." : "SignIn"}</button>
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
export default Login