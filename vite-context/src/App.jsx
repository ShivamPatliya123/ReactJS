import { useState,useEffect } from 'react'
import './App.css'
import UserConxtProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

// function App() {
//   return (
//     <UserConxtProvider>
//     <h1>react-context</h1>
//     <Login/>
//     <Profile/>
//     </UserConxtProvider>
//   )
// }
function App() {

  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
   document.querySelector('html').classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode) 
  }, [themeMode])
  

  return (

    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>

    </ThemeProvider>

  )
}

export default App
