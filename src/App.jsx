import { useState } from 'react'
import {BrowserRouter,  Routes, Route, Navigate} from 'react-router-dom'
import ResponsiveAppBar from './components/common/navbar/Navbar'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import { Favorite } from '@mui/icons-material'

Navigate

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <div>  <ResponsiveAppBar/></div>
   
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='inicio' element={<Home/>} />
    <Route  path='/contacto' element={<Contact/>} />
    <Route  path='/favoritos' element={<Favorite/>} />

  </Routes>
  
    </>
     
  )
}

export default App