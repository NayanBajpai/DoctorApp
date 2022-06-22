import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import {Link} from 'react-router-dom';
const BookDoctor = () =>{
    
    const [doctors,setDoctors] = useState([]);
    

    useEffect(()=>{
        loadDoctor();
    },[]);
    

    const loadDoctor = async () =>{
        const result = await axios.get("http://localhost:3001/doctors");
        setDoctors(result.data);
    };
    

    const deleteDoctor = async id =>{
        await axios.delete(`http://localhost:3001/doctor/${id}`);
        loadDoctor();
    }

    return (
        
        <>
        <div><Navbar/></div>
        <div className='container mt-3'>
            
            <h1>
               This is Home Page
            </h1>

            <table class="table">
  <thead>
    <tr className='bg-dark text-white '>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Speciality</th>
      <th scope="col">Emails</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {doctors.map((doctor,index)=>(
            <tr>
                <th scope='row'>{index+1}</th>
                <td>{doctor.name}</td>
                <td>{doctor.type}</td>
                <td>{doctor.email}</td>
                <td>
                    <Link className="btn m-2" to={`/doctor/${doctor.id}`}><button className='btn btn-dark'>Book</button></Link>
                    
                    

                </td>
            </tr>
        ))}
  </tbody>
</table>

        </div>
        </>
    );
}

export default BookDoctor;