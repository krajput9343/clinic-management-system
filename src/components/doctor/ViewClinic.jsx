import { useDispatch, useSelector } from "react-redux"
import ApiService, { ApiUrls } from "../../WebServices/ApiService"
import { useEffect, useState } from "react"
import { ClinicListReducer, updateClinicReducer } from "../../reduxData/ClinicSlice"
import { useNavigate } from "react-router-dom"

export default function ViewClinic() {
    const userinfo = useSelector(state => state.authInfo.value)

    const clinicList = useSelector(state => state.clinicInfo.value)
    console.log("clinicList from store", clinicList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    console.log(userinfo.token)

    const viewlist = async () => {

        try {

            const response = await ApiService.GetApiCall(ApiUrls.CLINIC_LIST, userinfo.token)
            console.log("clinic list", response)
            if (response.data.status) {
                const cliniclist = response.data.data

                dispatch(ClinicListReducer(cliniclist))
            } else {
                setMsg(response.data.msg)
            }

        } catch (error) {

        }


    }

    useEffect(() => {
        viewlist()
    }, [])


    const deleteClinic = async (id) => {
        const status = window.confirm("Are You sure to want to delete this record ?")
        if (status) {
            const URL = ApiUrls.DELETE_CLINIC + id
            console.log(URL)
            const response = await ApiService.DeleteApiCall(URL, userinfo.token)
            console.log("delete api call", response)
            if (response.data.status) {

                setMsg(response.data.msg)
                viewlist()
            } else {
                setMsg(response.data.msg)
            }
        } else {
            setMsg("error while delete")
        }

    }

    const update = (ob) => {
        console.log(ob)
        dispatch(updateClinicReducer(ob))
        navigate('/doctor/updateclinic')
    }

    return <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ borderColor: "rgba(256, 256, 256, .3) !important" }}>View Clinic Details</h5>
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
                                    <th>Clinic Name</th>
                                    <th>Recptionist Name</th>
                                    <th>Recptionist Email</th>
                                    <th>Contact</th>
                                    <th>Password</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clinicList.map((ob, index) => <tr><td>{index + 1}</td>
                                    <td>{ob.raddress}</td>
                                    <td>{ob.name}</td>
                                    <td>{ob.email}</td>
                                    <td>{ob.phoneNumber}</td>
                                    <td>{ob.password}</td>
                                    <td>{ob.activeStatus ? "Active" : "DeActive"}</td>
                                    <td><button className="btn btn-primary" onClick={() => update(ob)} >Edit</button>&nbsp;<button className="btn btn-danger" onClick={() => deleteClinic(ob.id)}>Delete</button></td>



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