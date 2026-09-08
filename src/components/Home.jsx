import { useSelector } from "react-redux"

function Home() {

    const userinfo = useSelector(state => state.authInfo.value)
    return <>



        <div className="container-fluid bg-primary py-5  hero-header">
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ borderColor: "rgba(256, 256, 256, .3) !important" }}>{userinfo.isLogin ? <>Welcome DR. {userinfo?.name}</> : <>Welcome To ShubhClinic</>}</h5>
                        <h1 className="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>
                        <div className="pt-2">
                            <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                            <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <!-- Appointment Start --> */}
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 className="display-4">Make An Appointment For Your Family</h1>
                        </div>
                        <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
                        <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="color-black text-center rounded p-5">
                            <h1 className="mb-4">Book An Appointment</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{ height: "55px" }}>
                                            <option >Choose Department</option>
                                            <option value="1">Department 1</option>
                                            <option value="2">Department 2</option>
                                            <option value="3">Department 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select bg-light border-0" style={{ height: " 55px" }}>
                                            <option selected>Select Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: " 55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: " 55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{ height: " 55px" }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{ height: " 55px" }} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Appointment End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-fluid py-5 bg-primary" >
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Our Doctors</h5>
                    <h1 className="display-4">Qualified Healthcare Professionals</h1>
                </div>
                <div className="owl-carousel team-carousel position-relative">
                    <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                            <div className="col-12 col-sm-5 h-100">
                                <img className="img-fluid h-100" src="img/team-1.jpg" style={{ objectFit: "cover" }} />
                            </div>
                            <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div className="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div className="d-flex mt-auto border-top p-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                            <div className="col-12 col-sm-5 h-100">
                                <img className="img-fluid h-100" src="img/team-2.jpg" style={{ objectFit: "cover" }} />
                            </div>
                            <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div className="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div className="d-flex mt-auto border-top p-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                            <div className="col-12 col-sm-5 h-100">
                                <img className="img-fluid h-100" src="img/team-3.jpg" style={{ objectFit: "cover" }} />
                            </div>
                            <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div className="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div className="d-flex mt-auto border-top p-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


        {/* <!-- Search Start --> */}
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                    <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                    <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
                </div>
                <div className="mx-auto" style={{ width: "100%", maxWidth: " 600px" }}>
                    <div className="input-group">
                        <select className="form-select border-primary w-25" style={{ height: " 60px" }}>
                            <option selected>Department</option>
                            <option value="1">Department 1</option>
                            <option value="2">Department 2</option>
                            <option value="3">Department 3</option>
                        </select>
                        <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
                        <button className="btn btn-dark border-0 w-25">Search</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Search End --> */}


        {/* <!-- Testimonial Start --> */}
        <div className="container-fluid py-5 bg-primary">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Testimonial</h5>
                    <h1 className="display-4">Patients Say About Our Services</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item text-center">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-1.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-quote-left fa-2x text-primary"></i>
                                    </div>
                                </div>
                                <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                <hr className="w-25 mx-auto" />
                                <h3>Patient Name</h3>
                                <h6 className="fw-normal text-primary mb-3">Profession</h6>
                            </div>
                            <div className="testimonial-item text-center">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                        <i className="fa fa-quote-left fa-2x text-primary"></i>
                                    </div>
                                </div>
                                <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                <hr className="w-25 mx-auto" />
                                <h3>Patient Name</h3>
                                <h6 className="fw-normal text-primary mb-3">Profession</h6>
                            </div>
                            <div className="testimonial-item text-center">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-3.jpg" alt="" />
                                    <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px ", height: "60px" }}>
                                        <i className="fa fa-quote-left fa-2x text-primary"></i>
                                    </div>
                                </div>
                                <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                <hr className="w-25 mx-auto" />
                                <h3>Patient Name</h3>
                                <h6 className="fw-normal text-primary mb-3">Profession</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
    </>
}

export default Home