import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Orders from './component/Orders/Orders'
import Products from './component/Products/Products'
import Register from './component/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/produtcs" element={<Products></Products>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default App
