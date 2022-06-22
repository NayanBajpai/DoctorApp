import React from "react";
import { Link } from "react-router-dom";

const PatientDashboard = () =>{
    return(
        <>
        <div className="container text-center"><img src = "images\images.png" alt="No image" style={{width:"30%"}} ></img></div>
        <div className="container text-center "></div>
        <div className="container text-center">
        <h1>Welcome User ! What do you want to do?</h1>
        <Link className="btn btn-lg btn-dark mr-3" to="/bookdoctor">Book Doctor</Link>
        <Link className="btn btn-lg btn-dark ml-3" to="/ppayment">Make payment</Link>
        </div>
        </>
    )
}

export default PatientDashboard