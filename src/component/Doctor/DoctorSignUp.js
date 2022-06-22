import axios from "axios";
import { NavLink,useHistory } from "react-router-dom";
import{React,useState} from "react";

const DSignUp = () =>{
    let history = useHistory();
    const [doctor,setDoctor] = useState({
        name:"",
        type:"",
        email:"",
        phone:"",
        password:"",
        
    });

    const {name,type,email,phone,password} = doctor;

    const onInputChange = e =>{
        setDoctor({
            ...doctor,[e.target.name]:e.target.value
        });
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/doctors",doctor);
        history.push("/dlogin");

    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Sign Up!</h2>
                <form onSubmit={e=> onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                        name = "name"
                        value={name}
                        onChange={e=> onInputChange(e)}
                        ></input>
                        </div>
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Speciality"
                        name = "type"
                        value={type}
                        onChange={e=> onInputChange(e)}
                        ></input>   
                    </div>
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name = "email"
                        value={email}
                        onChange={e=> onInputChange(e)}
                        ></input>   
                    </div>
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Phone Number"
                        name = "phone"
                        value={phone}
                        onChange={e=> onInputChange(e)}
                        ></input>   
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter Password"
                        name = "password"
                        value={password}
                        onChange={e=> onInputChange(e)}
                        ></input>   
                    </div>
                    
                    <button className="btn btn-primary btn-block">Sign Up</button>
                    <p className="mt-3">Already have an account <span><NavLink to="/dlogin">Sign In!</NavLink></span></p>
                </form>

            </div>
            
        </div>
    );
}

export default DSignUp;