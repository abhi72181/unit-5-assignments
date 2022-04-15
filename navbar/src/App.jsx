import Card from "./components/Navbar"
import "./App.css"
const data=[
  {
    item:"services",
    href:"https://www.google.com/"
  },
  {
    item:"Projects",
    href:"https://www.facebook.com/"
  },
  {
    item:"About",
    href:"https://www.instagram.com/"
  }
]
function App() {
  return (
    <div className="nav">
      <p className="logo">LogoBakery</p>
      <p className="flexs" >
      {data.map((e)=>{
        return <Card item={e.item} href={e.href}/>
      })}
      </p>
      <button>Contact</button>
    </div>
  );
}

export default App;
