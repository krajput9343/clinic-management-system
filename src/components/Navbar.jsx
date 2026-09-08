import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AuthReducer } from "../reduxData/AuthSlice"

function Navbar() {

    const userinfo = useSelector(state => state.authInfo.value)
    console.log("redux-data", userinfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(AuthReducer({
            token: undefined,
            name: undefined,
            type: undefined,
            id: undefined,
            isLogin: false,
            email: undefined
        }))
        localStorage.clear("loginInfo")
        navigate('/')
    }

    return <>

        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>SHUBHCLINIC</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">

                            {userinfo?.isLogin ? <>

                                {userinfo?.type == "doctor" ? <>
                                    <Link to="/doctor/addclinic" className="nav-item nav-link">Add Clinic</Link>
                                    <Link to="/doctor/viewclinic" className="nav-item nav-link">View Clinic</Link>
                                    <Link to="/doctor/appointment" className="nav-item nav-link">Appointments</Link>

                                </> : <>
                                </>}

                                {userinfo?.type == "reception" ? <>
                                    <Link to="/reception/newappointment" className="nav-item nav-link">New Appointment</Link>
                                    <Link to="/reception/appointmentlist" className="nav-item nav-link">AppointmentList</Link>
                                    {/* <Link to="/doctor/appointment" className="nav-item nav-link">Appointments</Link> */}

                                </> : <>
                                </>}




                            </> : <>

                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/service" className="nav-item nav-link">Service</Link>

                                <Link to="/appointment" className="nav-item nav-link">Appointment</Link>
                            </>}


                            {
                                userinfo?.isLogin ? <>
                                    <button onClick={logout} className="nav-item nav-link border-0 bg-transparent">Logout</button>
                                </> : <>

                                    <Link to="/register" className="nav-item nav-link">Register</Link>
                                    <Link to="/login" className="nav-item nav-link">Login</Link></>
                            }

                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </>
}

export default Navbar