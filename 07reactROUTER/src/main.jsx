import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Abouts from './components/Abouts/Abouts.jsx'
import User from './components/User/User.jsx'
import Github ,{loader} from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//     {
//       path:'/',
//       element: <Layout/>,
//       children: [
//         {
//           path:'',
//           element:<Home/>
//         },
//         {
//           path:'contacts',
//           element:<Contact/>
//         },
//         {
//           path:"about",
//           element:<Abouts/>
//         }
//       ]
//     }


// ])

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<Abouts/>} />
        <Route path='contacts' element={<Contact/>} />
        <Route path='user/:userId' element={<User/>}/>
        <Route 
        loader={loader}
        path='github' element={<Github/>}/>


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider  router={router}/>
  
)
