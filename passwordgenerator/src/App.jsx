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
      
    }

    let
 }, [length,numberAllowed,charAllowed,setpassword])

  return (
    <>
     
        <h1 className='text-5xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
