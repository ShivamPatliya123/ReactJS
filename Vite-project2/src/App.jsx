import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Footer/>
    </>
  )
}

export default App
