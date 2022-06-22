import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const DLogin = () =>{

    const history = useHistory();

    const [inpval, setInpval] = useState({
        
        username:"",
        
        password:""

    })

    
    
   // console.log(inpval);
    const getdata = (e) =>{
       // console.log(e.target.value);
       const {value,name} = e.target;
       //console.log(value,name);
       setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
       })

    }
    const addData = (e) =>{
        e.preventDefault();
        const {username,password} = inpval;
        console.log(username);
        console.log(password)

        
         if(username === "hello"){
            if(password==="123"){
                history.push('/ddashboard');
            }
            else{
                alert('wrong pass')
            }
        }
        else{
            alert("wrong user")
        }
    }
    return(
        <>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data p-3" style={{width:"100%"}}>
                    <h3 className="text-center col-lg-6">LOGIN!</h3>
                    <form>
  

  

  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your UserName"
      name = 'username'
      onChange={getdata}
    />
    
    
  </div>
  
  
  <div className="form-group mb-3 col-lg-6">
   
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      name = 'password'
      onChange={getdata}
    />
  </div>
 
  <button type="submit"  onClick = {addData} className="btn btn-success mt-3 col-lg-6">
    Login
  </button>
</form>
<p className="mt-3">Create Account <span><NavLink to="/dsignup">Sign Up!</NavLink></span></p>

                </div>
                
            </section>
        </div>
        </>
    )

}

export default DLogin;