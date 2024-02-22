import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
  name : "Vikas",
  age : 22
  }

  let newArray = [1, 2, 3]

  return (
    <>
    <h1 className= 'bg-red-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username = "top10" btnText = "click me"/>
     <Card username="neha" btnText = "visit me"/>
     <Card username="tanvi" />



    </>
  )
}

export default App
