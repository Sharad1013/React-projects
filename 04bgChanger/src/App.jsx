import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-24 flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl py-2 px-3 mx-5 ">
          <p className="text-black rounded-3xl px-6 py-3 w-20 font-bold text-sm" style={{backgroundColor : color}}>
            {color}
          </p>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl py-2 px-3">
            <button
              className="outline-none px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-white "
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 rounded-full shadow-lg text-black "
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("olive")}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
