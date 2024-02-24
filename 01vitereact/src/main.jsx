import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom App (myApp) ! </h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props: {
//       href : 'https://google.com',
//       target : '_blank',
//   },
//   children : 'Click Me to Visit Google',  
// }


const anotherUser = "chai or react"


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target : '_blank',
  },
  'click me to visit Google',
  anotherUser, // evaluated expression(variables)
)


const anotherElement  = (
  <a href='https://google.com' target='_blank'>Visit Google.</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App /> 
    // <MyApp />
    // ReactElement 
    // anotherElement
    reactElement
    // MyApp()
  // </React.StrictMode>,
)
