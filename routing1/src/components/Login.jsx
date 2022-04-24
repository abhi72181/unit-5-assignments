import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/Authcontext"

const Login=()=>{
    const {handleAuth}=useContext(AuthContext)
     const navigate=useNavigate()
    return <div>
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter password" />
        <button onClick={()=>{
            handleAuth(true)
            navigate(-2 ,{replace:true})
        }}>login</button>
       
    </div>
}
export default Login