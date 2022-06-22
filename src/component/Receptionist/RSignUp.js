import axios from "axios";
import { NavLink,useHistory } from "react-router-dom";
import{React,useState} from "react";

const RSignUp = () =>{
    let history = useHistory();
    const [patient,setPatient] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        
    });

    const {name,username,email,phone,password} = patient;

    const onInputChange = e =>{
        setPatient({
            ...patient,[e.target.name]:e.target.value
        });
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/patients",patient);
        history.push("/rlogin");

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
                        placeholder="Enter Username"
                        name = "username"
                        value={username}
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
                    <p className="mt-3">Already have an account <span><NavLink to="/rlogin">Sign In!</NavLink></span></p>
                </form>

            </div>
            
        </div>
    );
}

export default RSignUp;