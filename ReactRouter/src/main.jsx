import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutAs from './components/About/AboutAs.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const Router = createBrowserRouter([
  {path:'/',
  element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<AboutAs/>

      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'user/:id',
        element:<User/>
      },
      {
        // loader:{githubInfoLoader},
        path:'github',
        element:<Github/>
      }
    ]
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
