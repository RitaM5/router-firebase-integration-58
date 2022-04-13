import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Login from './component/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
