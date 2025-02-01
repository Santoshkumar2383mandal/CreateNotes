import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [title,setTitle]=useState("")
  const [value,setValue]=useState("");
  const[searchParams,setSearchparams]=useSearchParams();

  const pasteId=searchParams.get("pasteId");
  return (
    <div>
      {/* <div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div> */}
      <input 
      className={`${
        pasteId ? "w-[80%]" : "w-[85%]"
      } text-black border border-input rounded-md p-2`}
      type="text"
      placeholder='enter the title here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <button>
        { pasteId ? "Update My paste" : "Create My Paste"}
      </button>
      
    </div>
  )
}

export default Home
