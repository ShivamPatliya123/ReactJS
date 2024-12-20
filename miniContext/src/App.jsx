
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1 className='bg-gray-700 text-white p-4 text-lg'>Hello JEE</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
