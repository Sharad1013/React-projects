import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName : "Hitesh",
    age : 21,
  }
    let img = "https://plus.unsplash.com/premium_photo-1661265866830-540f8c972036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let newArr = [1,2,3];
  return (
    <>
    <h1 className='text-center bg-green-500 text-black p-4 rounded-xl '>Tailwind Test</h1>
    <h1 className='mb-4'>Props make the content reusable.</h1>
    <h1 className='mb-4'>This web sheet is all about props and tailwind css in react.</h1>
    <Card userName = "chai aur code" someObject = {myObj} newArray = {newArr} btnText = "React Practice" img={img}/>
    <Card userName = "Sharad" someObject = {myObj} newArray = {newArr} btnText = "React Practice Session 7" img={img}/>
    </>
  )
}

export default App
