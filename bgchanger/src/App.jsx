import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center
         bg-gray-400 bottom-12 inset-x-0 px-2'>
          <dev className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
          px-3 py-2 rounded-xl">
            <button className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
             <button className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
             <button className='outline-none px-4 py-1 rounded-full
             text-black shadow-lg' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
             <button className='outline-none px-4 py-1 rounded-full
             text-white shadow-lg' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          </dev>
         </div>
      </div>
    </>
  )
}

export default App
