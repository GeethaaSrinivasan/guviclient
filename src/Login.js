//import React from "react";
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import "./CSS/Registration.css";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom"
 
function Login() {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const { register, handleSubmit, formState: { errors } } = useForm();
const navigate=useNavigate();
const ProfileNavigation =async(UIdata)=>
    {
    const apidata=await (await fetch("/api/getFromEmail/"+UIdata.email)).json()
    const apidata1=apidata[0]
    
    if(apidata1)
    {
      if(apidata1.password===apidata1.password)
      {
        alert("Successfully logged into"+apidata1.name +"account");
         navigate('/ProfileNew',{state:apidata1});
      }
      else{
        alert("Email or Password does not match");
      }
    }else
        {
            alert("Email does not exist");
        }

    };

const RegistrationNavigation =()=>
    {
        navigate('/Registration');
    }

    return (
        <>
        
        
        <div style={{backgroundColor:"grey"}} >
      
            <form className="Registration" onSubmit={handleSubmit(ProfileNavigation)}>
           <label className="title" style={{textAlign:"center"}}>Login</label> 
               
                 <label>Email :</label>
                <input type="email" {...register("email", { required: true })} onChange={(e)=> {
                    setEmail(e.target.value)}}/>
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                    
                 <label>Password :</label>
                <input type="password" {...register("password")} onChange={(e)=> {
                    setPassword(e.target.value)}}/>
                {errors.password && <span style={{ color: "red" }}>
                               *Password* is mandatory </span>}

                 <button  className="Submit"  style={{ backgroundColor: "#a1eafb" }} type={"submit"}>Login</button>
                 <label style={{textAlign:"center"}}>Are you a new member,Do you want to Register</label>
                      
                   <button  className="Submit" onClick={RegistrationNavigation}  style={{ backgroundColor: "#a1eafb" }} type={"submit"}>Register</button>
                   
            </form>
        </div>
            
        </>
    );
}
 
export default Login;