import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/characters")
      .then(res => {
        setItems(res.data)
      })
  },[])

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  )
}

export default App
