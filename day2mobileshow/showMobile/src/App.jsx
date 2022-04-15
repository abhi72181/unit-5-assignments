
//  var arr1=["abhi","ankush","annu","papa"]
//  var arr2=["vinod","raja","pannu","baba"]
const data=[
  {
  heading:"Mobile Operating System",
  lists:["Android","Blackberry","Apple","Windows Phone"]
},
{
  heading:"Mobile Manufacturers",
  lists:["Samsung ","HTC","Micromax","Apple"]
},



]
function App() {
  return (
  <div>
    {data.map((e)=>{
      return <Card heading={e.heading} lists={e.lists}/>
    })}
 
 </div>
  )
}

function Card(props){
  
  return <Items datas={props.lists} head={props.heading}>
    
  </Items> 
}

function Items(dat){
  return <p>
    <h1>{dat.head}</h1>
    {dat.datas.map((e)=>(
       <li>{e}</li>
    ))}
  </p>
}
export default App;
