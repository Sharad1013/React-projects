import Chai from "./chai";

function App() {
const userName = "chai or code"

  return (
    // either wrap all the content in a div or you can make empty <> </>( fragments ) at the end of the day you can only return on element so be careful.
    <>
    <h1>Chai Or React with vite | Sharad Sinha</h1>
    <h2>the statement chai or code over here is coming form a template literal kind of syntax as once the variable is declared it can be rendered into the jsx using {'variablename'} </h2>
    <h1>Rendered variable '{userName}' isko ham bolte hai evaluated expression. </h1>
    <h1>evaluated expression bole to wo expressionjo ki fully evaluated hai js me. jsx k andr hmlg koi v evaluation nhi kr skte jaise ki if, else ya kch or isiliye ye expression me jo js ka final result hota hai bs whi pass kiya jata hai.</h1>
    <Chai/>
    <p>Test Paragraph</p>
    </>
  )
}

export default App
