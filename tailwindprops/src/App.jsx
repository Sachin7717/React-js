import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let obj = {
  username:"steve",
  age: 19
}

let arr = [2,3,4]

function App() {
  return (
    <>
      <h1 className='bg-green-400 rounded-xl'>Tailwind test</h1>
      <Card name="sachin" someobj= {obj} newarr = {arr} />
      <Card name="Lucifer" />
    </>
  )
}

export default App
