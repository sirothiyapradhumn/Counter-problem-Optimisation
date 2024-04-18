import React, {useState} from 'react'
import PrintTable from './PrintTable';
 
const App = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
 
    const handleClick = () => {
      for(let i = 0; i<5; i++) {
        setCounter3((prev)=> prev+5)
      }
    }
 
    return <>
        Counter1: {counter1} <button onClick={() => setCounter1((prev)=> prev+1)}>count1++</button>
        <br/>
        Counter2: {counter2} <button onClick={() => setCounter2((prev)=> prev-1)}>count2--</button>
        <br/>
        Counter3: {counter3} <button onClick={handleClick}>count3 Inc. by 5</button>
        <br/>

        <PrintTable num={counter1}/>
    </>
}
 
export default App;