import { useCallback, useState } from 'react'

import './App.css'

function App() {
 const [length, setlenght] = useState(8);
 const [numberAllowed , setnumberAllowed] = useState(false)
 const [charAllowed , setcharAllowed] = useState(false)
 const [password , setpassword] = useState("")

 const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)

      
    }
    setpassword(pass)

    
 }, [length,numberAllowed,charAllowed,setpassword])

  return (
    <>
    <div className="box">
     {/* <div className='w-full max-w-md mx-auto shadow-md align-center justify-center  rounded-lg px-3 my-8 text-orange-600 bg-gray-800'> */}
      <h1>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value={password}
         className='input' 
         placeholder='Password'
         readOnly
         />

      </div>
     </div>
    </>
  )
}

export default App
