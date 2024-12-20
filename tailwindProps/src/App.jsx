import Card from './component/Card'
import './App.css'
function App() {
  let myobj ={
    userName: "Shivam",
    age:21
  }

  return (
    <>
      <h1 className='bg-gray-600 rounded-xl p-3 text-white font-medium m-2 justify-items-center text-center'>Tailwind CSS</h1>
    <Card userName="shivam" btn="View Profile"/>
    <Card/>

    </>
  )
}

export default App
