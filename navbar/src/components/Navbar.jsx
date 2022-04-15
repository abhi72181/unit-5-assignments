import "./Navbar.css"
function Card(props){

    return <a className="link" href={props.href}>{props.item}</a>
}

export default Card