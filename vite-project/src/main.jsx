import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component1/Home/Home.jsx'
import About from './component1/About/About.jsx'
import Contect from './component1/Contect/Contact.jsx'
import User from "./component1/User/User.jsx"
import Github from './component1/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contect",
        element:<Contect/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
