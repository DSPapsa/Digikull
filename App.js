import React,{useState} from 'react'
import "./App.css"
function App() {

const [input,setInput]=useState(0)

function handleChange (event){
    setInput(event.target.value)
}
function addButton(event){
    setResult(Number(result)+Number(input))
}
function subButton(){
    setResult(Number(result)-Number(input))
}

let [result,setResult]=useState(0)
    return (
      
       <div className="center" >
       <h2 >REACT-ADD-SUB</h2>
        <p>Enter a value to add and subtract</p>    
        <p>$:<input class="second" onChange={handleChange} type="number" name="" id="" /></p>
            
        <button onClick={addButton}>ADDITION</button>
        
        <button onClick={subButton}>SUBTRACT</button>

        <p class="output col-md-4 offset-4 mb-4"  >
          Result:{result}
        </p>
        </div>
       
    )
}

export default App