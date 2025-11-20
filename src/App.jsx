
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from './pages/Error';

import MAIN from './layouts/MAIN';
import Dashboard from './pages/Dashboard/Dashboard';

import Login from './pages/login/Login';

import Payment from './pages/Payment/Payment'

import RecordList from './pages/Records/RecordList';
import RecordDetail from './pages/Records/RecordDetail';

import DoctorList from './pages/Doctors/DoctorList';

import PatientList from './pages/Patients/PatientList';
import PatientDetail from "./pages/Patients/PatientDetail";
import Profile from './pages/Dashboard/Profile';
import HospitalList from './pages/Hospital/HospitalList'
import HospitalPayment from './pages/Hospital/HospitalPayment';

function App() {
  
   const router = createBrowserRouter([
     {
       path: "/",
       element: <MAIN></MAIN>,
       errorElement: <Error></Error>,
       id: "root",
       children: [
         {
           index: true,
           element: <Dashboard></Dashboard>,
         },
         {
           path: "/profile",
           element: <Profile></Profile>,
         },
         {
           path: "/hospital-list",
           element: <HospitalList></HospitalList>,
         },
         {
           path: "/hospital-payment/:id",
           element: <HospitalPayment></HospitalPayment>,
         },
         {
           path: "/doctor-list",
           element: <DoctorList></DoctorList>,
         },
         {
           path: "/patient-list",
           element: <PatientList></PatientList>,
         },
         {
           path: "/patient-details",
           element: <PatientDetail></PatientDetail>,
         },
         {
           path: "/record-list",
           element: <RecordList></RecordList>,
         },
         {
           path: "/record-details",
           element: <RecordDetail></RecordDetail>,
         },
         {
           path: "/payment",
           element: <Payment></Payment>,
         },
       ],
     },
     {
       path: "/login",
       element: <Login></Login>,
       errorElement: <Error></Error>,
     },
   ]);

   return <RouterProvider router={router} />;
}

export default App
