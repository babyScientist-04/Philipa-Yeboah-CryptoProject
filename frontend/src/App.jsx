import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Learn from './pages/Learn'
import Explore from './pages/Explore'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/Explore' element={<Explore/>}/>
      </Routes>
    </div>
  )
}

export default App
