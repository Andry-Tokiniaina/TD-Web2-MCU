import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';
import Tab from './components/Tab';
import AddForm from './components/AddFrom'
import AlertDel from './components/AlertDel';



function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/characters")
      .then(res => {
        setItems(res.data)
      })
  },[])

  return (
    <div className='bg-blue-200 h-screen w-screen p-20 m-auto flex justify-center items-center flex-col'>
      <Tab characters={items}/>
      <AddForm/>
    </div>
  )
}

export default App
