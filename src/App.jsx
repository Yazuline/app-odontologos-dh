
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ResponsiveAppBar from './components/common/navbar/Navbar'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'

import CollapsibleTable from './components/pages/detail/Details'
import Favorite from './components/pages/favorite/Favorite'
import Footer from './components/common/footer/Footer'


function App() {
 

  return (
    <>
   
    <div>  <ResponsiveAppBar/></div>
   
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/inicio' element={<Home/>} />
        <Route  path='/contacto' element={<Contact/>} />
        <Route  path='/favoritos' element={<Favorite />} />
        <Route  path="/detalle/:userid" element={<CollapsibleTable   />} />
        <Route  path='*' element={<Navigate to="/"/>} />
     </Routes>
    
    <Footer/>
   
    </>
      )
}

export default App
