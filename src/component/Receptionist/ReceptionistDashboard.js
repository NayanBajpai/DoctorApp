import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import {Link} from 'react-router-dom';
const ReceptionistDashboard = () =>{
    
    const [patients,setPatients] = useState([]);
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        loadPatient();
    },[]);
    useEffect(()=>{
        loadDoctor();
    },[]);

    const loadPatient = async () =>{
        const result = await axios.get("http://localhost:3001/patients");
        setPatients(result.data);
    };
    const loadDoctor = async () =>{
        const result = await axios.get("http://localhost:3001/doctors");
        setDoctors(result.data);
    };

    const deletePatient = async id =>{
        await axios.delete(`http://localhost:3001/patients/${id}`);
        loadPatient();
    }

    return (
        
        <>
        <div><Navbar/></div>
        <div className='container mt-3'>
            
            <h1>
               Patients List
            </h1>

            <table class="table">
  <thead>
    <tr className='bg-dark text-white '>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      
      <th scope="col">Emails</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {patients.map((patient,index)=>(
            <tr>
                <th scope='row'>{index+1}</th>
                <td>{patient.name}</td>
                
                <td>{patient.email}</td>
                <td>
                    <Link className="btn m-2" to={`/patient/${patient.id}`}><i class="fa-solid fa-eye"></i></Link>
                    
                    <Link className="btn m-2" onClick={()=>{deletePatient(patient.id)}}><i class="fa-solid fa-trash-can"></i></Link>

                </td>
            </tr>
        ))}
  </tbody>
</table>
<h1>Available Doctors</h1>
<table class="table">
  <thead>
    <tr className='bg-dark text-white '>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Speciality</th>
      <th scope="col">Email</th>
     
    </tr>
  </thead>
  <tbody>
        {doctors.map((doctor,index)=>(
            <tr>
                <th scope='row'>{index+1}</th>
                <td>{doctor.name}</td>
                <td>{doctor.type}</td>
                <td>{doctor.email}</td>
                
               
            </tr>
        ))}
  </tbody>
</table>
        </div>
        </>
    );
}

export default ReceptionistDashboard;