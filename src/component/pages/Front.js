import React from "react";
import  {Link, NavLink, useRouter} from "react-router-dom";



const Front= ()=>{
    
return(
    <>
    <div className="container text-center"><img src = "images\images.png" alt="No image" style={{width:"30%"}} ></img></div>
    <div className="container text-center ">
        <h1>Hello!</h1>
        <h1>Welcome to Online Doctor Booking Website</h1>
        <h3>Please Choose Your Role</h3>
        <Link className='btn btn-dark w-25 m-3' to = "/plogin">Patient</Link>
        <Link className='btn btn-dark w-25 m-3' to = "/dlogin">Doctor</Link>
        <Link className='btn btn-dark w-25 m-3' to = "/rlogin">Receptionist</Link>

        </div>
        </>
)
}

export default Front;