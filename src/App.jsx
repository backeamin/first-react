import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import My from './My.jsx'
import Users from './Users.jsx'
import { useState } from 'react'

function App() {

  return (
    <>
      <h1>React</h1>
        <Users></Users>
        {/*<New></New>*/}
        {/*<My isDone={false}></My>*/}

        {/*<Counter></Counter>*/}

    </>
  )
}

function New(){
    const divStyle = {
        margin : '20px',
        padding : '20px',
        borderRadius : '5px',
        border : '2px solid black',
    }
    return (
        <div style={divStyle}>
            <h3>Studemt</h3>
            <p>Name: Eamin</p>
            <p>Age: 21</p>
        </div>
    )
}

function Counter(){
    const [count, setCount] = useState(0);
    const divStyle = {
        margin : '20px',
        padding : '20px',
        borderRadius : '5px',
        border : '2px solid black',
    }
    const btnStyle = {
        padding : '5px 20px',
        borderRadius : '5px',
        border : '2px solid black',
        backgroundColor: 'lightYellow',
        color: 'black',
        fontSize: '20px'
    }

    const addOne = () =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const removeOne = () =>{
        const newCount = count-1;
        setCount(newCount);
    }
    return (
        <div style={divStyle}>
            <h3>Counter :  {count}</h3>
            <button onClick={addOne} style={btnStyle}>+</button>
            <button onClick={removeOne} style={btnStyle}>-</button>
        </div>
    )
}

export default App
