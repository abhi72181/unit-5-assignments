import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

import TodoList from './components/Todoitem'
function App() {
  const [data, setData] = useState([])
  const [todo,setTodo]=useState({todos:""})
  
  const handleChange=(e)=>{
    // console.log(e.target.value)
    
    setTodo({...todo,[e.target.id]:e.target.value})
    
  }
  //  fetch()
  const putData=()=>{
    // const payLoad={todos:todo}
    fetch("http://localhost:8000/posts",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(todo)
    }).then(()=>{
      getData()
    })
  }
  // console.log(todo)
  async function getData(){
   var d=await fetch("http://localhost:8000/posts")
   d=await d.json()
   setData(d)
  }
    
  
   
  
  useEffect(()=>{
    getData()
  },[])

  
     console.log(data)
  
  return (
    <div className='main'>
      <div className='items'>
      {data.map((e)=>{
      return <TodoList datas={e.todos} />
    })}
      </div>
       
      <div className='input'>
      <input onChange={handleChange} type="text" placeholder='Write Something' id='todos'/>
      <button onClick={putData}>+</button>
      </div>
     
      
      
      
    </div>
  )
}

export default App
