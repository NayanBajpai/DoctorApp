import React,{useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import axios  from "axios";
import userEvent from "@testing-library/user-event";

const DoctorDetails = () =>{

    const [doctor,setDoctor] = useState({
        name:"",
        type:"",
        email:"",
        
    });

    const {id} = useParams();

    useEffect(()=>{
        loadDoctor();
    },[]);

    const loadDoctor = async () =>{
        const result = await axios.get(`http://localhost:3001/doctors/${id}`);
        setDoctor(result.data);
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary " to="/">
                Back to Home
            </Link>
            <h1 className="display-4"> Doctor Id: {id}</h1>
            <hr/>
            <ul className=" list-group w-50">
                <li className="list-group-item"> name : {doctor.name}</li>
                <li className="list-group-item"> Speciality : {doctor.type}</li>
                <li className="list-group-item"> email : {doctor.email}</li>
                

            </ul>
            <h1>Congratulations Your Doctor has Been Booked!</h1>
        </div>
    );

}

export default DoctorDetails;