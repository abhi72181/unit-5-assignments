import { Link } from "react-router-dom"
function Navbar(){
    let nav=[{
        title:"Home",
        path:'/'
    },{
        title:"About",
        path:'/about'
    },
    {
        title:"users",
        path:'/users'
    }]
    return <div>
        {nav.map((e)=>{
           return <Link to={e.path}>{e.title}</Link>
        })}
    </div>
}
export default Navbar