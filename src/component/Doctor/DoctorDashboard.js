import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import {Link} from 'react-router-dom';
const DoctorDashboard = () =>{
    
    const [patients,setPatients] = useState([]);
    

    useEffect(()=>{
        loadPatient();
    },[]);
    

    const loadPatient = async () =>{
        const result = await axios.get("http://localhost:3001/patients");
        setPatients(result.data);
    };
    

    const deletePatient = async id =>{
        await axios.delete(`http://localhost:3001/patient/${id}`);
        loadPatient();
    }

    return (
        
        <>
        <div><Navbar/></div>
        <div className='container mt-3'>
            
            <h1>
               Welcome Doctor ! These are your Appointments.
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
                    <Link className="btn m-2" to={`/patient/${patient.id}`}><button className='btn btn-dark'>Diagnose</button></Link>
                    
                    

                </td>
            </tr>
        ))}
  </tbody>
</table>

        </div>
        </>
    );
}

export default DoctorDashboard;