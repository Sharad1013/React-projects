import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// use state will change the state of the element 

// use state will only return two values in the form of an array 0th is a counter and the 1st is a function.

// let [variable, functionByReactToUpdate that variable in the UI ] = useState( /* default value of a variable */)

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    // counter++;
    // console.log(counter);
    // setCounter(counter)
   if(counter < 20) { 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
// koi fayda nhi hai kyuki itna likhne k bdd v bs 1 hi brr value increment hogi jaisa ki hmne psdha tha ki fibre ki madad se react batches me kaam krta hai or intermediate state ko eliminate krta hai, sidha final state pr jata hai.

// or agr tmko krna hi hai sath me charo update to aisa kro 
// setCounter deta hai hme callback isiliye hmne prevcounter uttha liya jo ki directly hmko previous tk k counter ki value dedega 
// prevCounter last updated value hoti hai. kyuki setCounter return krta hai ek callback function.
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
// setCounter(prevCounter => prevCounter + 1);
// setCounter(prevCounter => prevCounter + 1);
// setCounter(prevCounter => prevCounter + 1);
   }

  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  } 

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
      <button onClick={
        removeValue
      }>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

// Ui updation me kaam aata hai hooks imagine ki ek value k change hone se bht saari jgh pr chize change horhi hai to sidhi btt hai ki vanilla js me agr ye functionality dalni hai to kitni brr changes krne prnge isiliye react ne introduce kiya hooks ko.

export default App
