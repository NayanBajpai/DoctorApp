import React,{useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import axios  from "axios";
import userEvent from "@testing-library/user-event";

const Patient = () =>{

    const [patient,setPatient] = useState({
        name:"",
        
        email:"",
        
    });

    const {id} = useParams();

    useEffect(()=>{
        loadPatient();
    },[]);

    const loadPatient = async () =>{
        const result = await axios.get(`http://localhost:3001/patients/${id}`);
        setPatient(result.data);
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary " to="/">
                Back to Home
            </Link>
            <h1 className="display-4"> Patient Id: {id}</h1>
            <hr/>
            <ul className=" list-group w-50">
                <li className="list-group-item"> name : {patient.name}</li>
                
                <li className="list-group-item"> email : {patient.email}</li>
                

            </ul>
            <h1>Patient has been diagnosed</h1>
        </div>
    );

}

export default Patient;