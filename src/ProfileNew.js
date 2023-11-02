import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import "./CSS/Registration.css";
import {useLocation} from 'react-router-dom';
 
function ProfileNew() {

const location = useLocation();

const [name, setName] = useState(location.state.name);
const [email, setEmail] = useState(location.state.email);
const [age, setAge] = useState(location.state.age);
const [gender, setGender] = useState(location.state.gender);
if(location.state.dateofbirth){
let timeStamp = Date.parse(location.state.dateofbirth)

var currdate = new Date(timeStamp);
var date = currdate.toISOString().substring(0,10);
//alert(date);
}
// else{
//    // alert("No data");
// }
const [dateofbirth, setDOB] = useState(date);
//alert(dateofbirth);
const [mobile, setMobile] = useState(location.state.mobile);

const{register,handleSubmit }=useForm();

const onSubmit=(data)=>
{
alert(gender);
    fetch("api/update/"+data.email,
    {
        method:'POST',
        body: JSON.stringify({email:email,name:name,
        age:age,gender:gender,dateofbirth:dateofbirth,mobile:mobile
        }),
        headers:{
        'Content-type':'application/json;charset=UTF-8',
        },
    })
    .then((response)=>response.json())
    .then((data)=>{
    console.log(data);
    })
    .catch((err)=>
    {
      console.log(err.message);
    });
};
     
    return (
        <>

        
        <div style={{backgroundColor:"grey"}} >
      
            <form className="Registration" onSubmit={handleSubmit(onSubmit)}>
               
           <label className="title" style={{textAlign:"center"}}>Profile</label> 
               <label>Name :</label>
                <input type="text"  {...register("name")} onChange={(e)=> {
                    setName(e.target.value)}} value={name}/>
                   
                 <label>Email :</label>
                <input type="email" {...register("email")} onChange={(e)=> {
                    setEmail(e.target.value)}} value={email}/>

                <label>Age :</label>
                <input type="text" {...register("age")} onChange={(e)=> {
                    setAge(e.target.value)}} value={age}/>

                <label>Gender :</label>
                 <input type="text" {...register("gender")} onChange={(e)=> {
                    setGender(e.target.value)}} value={gender}/>

                <label>DateOfBirth :</label>    
                <input type="date" {...register("dateofbirth")} onChange={(e)=> {
                    setDOB(e.target.value)}} value={dateofbirth} />

                 <label>Mobile :</label>
                <input type="text" {...register("mobile")} onChange={(e)=> {
                    setMobile(e.target.value)}} value={mobile}/>
                <input  className="Submit" value="Update" style={{backgroundColor: "#a1eafb"}} type={"submit"}/>
                   
            </form>
        </div>
            
        </>
    );
}
 
export default ProfileNew;