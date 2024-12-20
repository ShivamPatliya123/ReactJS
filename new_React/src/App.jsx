
import './App.css'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import PropsPass from './components/PropsPass'
import { useState } from 'react'
import Button from './components/Button'

function App() {
  const[count, setCount] = useState(0)

    function handleClick (){
      setCount(count+1);
    }
  return (
    <div>
      <Button handleClick={handleClick}>
          <h1>{count}</h1>
      </Button>
    </div>
    // <div>
    //   <PropsPass>
    //     <h1>This is heading </h1>
    //     <p>This is paragraph</p>
    //     <p>This is second para</p>
    //   </PropsPass>
    // </div>
    // <div className='container'>
    //   <UserCard name="User-Card 1"/>
    //   <UserCard name="User-card 2"/>
    //   <UserCard name="User-card 3"/>
    //   <Counter/>
    // </div>
  )
}

export default App
