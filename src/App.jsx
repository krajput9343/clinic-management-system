import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Service from './components/Service'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/doctor/Dashboard'
import Appointment from './components/Appointment'
import NewClinic from './components/doctor/NewClinic'
import ViewClinic from './components/doctor/ViewClinic'
import UpdateClinic from './components/doctor/UpdateClinic'
import Appointments from './components/doctor/Appointments'
import NewAppointment from './components/receptionist/NewAppointment'
import AppointmentList from './components/receptionist/AppointmentList'
import UpdateAppointment from './components/receptionist/UpdateAppointment'
import { useSelector } from 'react-redux'

function App() {
  const userinfo = useSelector(state => state.authInfo.value)

  return (
    <>
      <Header />
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/about' element={< About />}></Route>
        <Route path='/service' element={< Service />}></Route>
        <Route path='/register' element={< Register />}></Route>
        <Route path='/login' element={< Login />}></Route>
        <Route path='/appointment' element={< Appointment />}></Route>

        {userinfo?.type == "doctor" ? <>

          <Route path='/doctor/dashboard' element={< Dashboard />}></Route>
          <Route path='/doctor/addclinic' element={< NewClinic />}></Route>
          <Route path='/doctor/viewclinic' element={< ViewClinic />}></Route>
          <Route path='/doctor/updateclinic' element={< UpdateClinic />}></Route>
          <Route path='/doctor/appointment' element={< Appointments />}></Route></> : <></>}


        {userinfo?.type == "reception" ? <>
          <Route path='/reception/newappointment' element={< NewAppointment />}></Route>
          <Route path='/reception/appointmentlist' element={< AppointmentList />}></Route>
          <Route path='/reception/updateappointment' element={< UpdateAppointment />}></Route>
        </> : <></>}
      </Routes>
      <Footer />
    </>
  )
}

export default App
