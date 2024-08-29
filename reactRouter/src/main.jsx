import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'


//this is method 1 of routing
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children: [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "About",
//         element: <About />
//       },
//       {
//         path : "Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//Method 2 of routing

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<Layout />}>
    <Route path='' element= {<Home/>}/>
    <Route path='About' element= {<About/>}/>
    <Route path='Contact' element= {<Contact/>}/>
    <Route path='user/:userid' element= {<User/>}/>
    <Route path='Github' element= {<Github/>}/>
    
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
