import{useState} from "react";
// import Simple from "./component/first";

function App() {
let [counter, setcounter] = useState(0)

 const addvalue = () =>{
  // counter = counter + 1;
  
  if(counter < 20){
    setcounter(counter + 1)
  };
 }
 const removevalue = () =>{
  if(counter > 0){
    setcounter(counter - 1)
  }
}
  return (
    <>
    {/* <Simple/> */}
    <h1>Counter Value {counter}</h1>
    <button onClick={addvalue}>Add Number {counter}</button>
    <br/>
    <br/>
    <button onClick={removevalue}>
      Remove Number {counter}</button>
    </>
  );
}

export default App;
