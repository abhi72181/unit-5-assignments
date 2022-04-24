import { useContext, useEffect, useState } from "react"
import { Navigate, Routes, useParams } from "react-router-dom"
import { AuthContext } from "../contexts/Authcontext"


const Userdetails=()=>{
    const [userData,setUserData]=useState([])
    const {isAuth}=useContext(AuthContext)
    const {id}=useParams()
    useEffect(()=>{
        const getData=async()=>{
            let data=await fetch(`https://reqres.in/api/users/${id}`)
            data=await data.json()
            setUserData(data.data)
       }
       getData()
    },[])
  
    if(!isAuth){
        return <Navigate to={"/login" } />
    }
    return (
         <div>
           
            
            <>
            <img src={userData.avatar} alt="" />
            <p>firstName:{userData.first_name}</p>
            <p>lastName:{userData.last_name}</p>
            <p>email:{userData.email}</p>
            </>
       
        </div>
    )
}
export default Userdetails