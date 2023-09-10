import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {
  
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = ()=>{
    alert('button2 clicked')
  }

  const handleClick3 = (num)=>{
    alert(num + 5);
  }
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('third button clicked')}}>Click Me 3</button>
      <button onClick={()=>handleClick3(3)}>Button Four</button>
      
    </>
  )
}

export default App
