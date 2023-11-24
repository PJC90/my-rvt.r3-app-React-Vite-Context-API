import { useEffect, useReducer, useState } from 'react'
import './App.css'
import CardForm from './Components/CardForm'
import Card from './Components/Card'
import Example from './Components/Example'
import { ProvaContext } from './stores/ProvaContext'
// lo state {name:"", email:""} lo prende qui useReducer(formReducer, {name:"", email:""})
//l' action sarebbe: "CHANGE_FIELD" e "RESET_FIELD"
function formReducer (state, action){
switch (action.type){
  case "CHANGE_FIELD":
    return {...state, [action.field]: action.value}
    case "RESET_FIELD":
      return {name:"", email:""}
      default:
        return state
}
}

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [formState, dispatchFormState] = useReducer(formReducer, {name:"", email:""})

  const handleFieldChange = (field, value) => {
dispatchFormState({type: "CHANGE_FIELD", field, value})
  }
  const resetForm = (e) => {
    e.preventDefault()
dispatchFormState({type: "RESET_FIELD"})
  }
  const sendForm = (e)=> {
    e.preventDefault()
    console.log(formState)
  }
  

  const addCity = (city) => {
    setCities([...cities, city])
  }
  const [cities, setCities] = useState([
    {
      id:1,
      title: "Tokyo",
      imgUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: true
    },
    {
      id:2,
      title: "Roma",
      imgUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      description: "we",
      isVisited: false
    },
    {
      id:3,
      title: "Parigi",
      imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: true
    },
    {
      id:4,
      title: "Amsterdam",
      imgUrl: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "we",
      isVisited: false
    },

  ])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        setData(data)
        console.log(data)
    })
},[])
  return (
    <ProvaContext.Provider value={{count, setCount}}>
    <Example/>
    <CardForm addCity={addCity}></CardForm>
    <form className='bg-sky-500 p-5 m-10'>
        <div className='p-3'> 
          <label htmlFor="name">Nome:</label>
          <input type="text" id='name' name='name' value={formState.name} onChange={(e) => handleFieldChange("name", e.target.value)} />
        </div>
        <div  className='p-3'>
          <label htmlFor="email">Email:</label>
          <input type="text" id='email' name='email' value={formState.email} onChange={(e) => handleFieldChange("email", e.target.value)} />
        </div>
        <button onClick={resetForm}  className='p-3 m-1'>Reset</button>
        <button onClick={sendForm}  className='p-3 m-1'>Invia</button>
      </form>
    <div className='grid grid-cols-5 gap-10'>
      {cities && cities.map((city)=>(
         <Card
         key={city.id}
         title={city.title}
         imgURL={city.imgUrl}
         isVisited={city.isVisited}
        description={city.description}
         >
         </Card>
      ))}
      </div>
    <div className='grid grid-cols-5 gap-10'>
      {data && data.map((item)=>(
        <div key={item.id} className='bg-slate-400 rounded-xl p-3 m-1 '>
          <p className='text-white text-3xl text-left'>User: <span className='text-black'>{item.userId}</span></p>
          <br />         
          <p className='text-cyan-200'>{item.title}</p>
          <br />         
          <p>{item.body}</p>
        </div>
      ))}
      </div>
      
    </ProvaContext.Provider>
  )
}

export default App