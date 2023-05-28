import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Product from './pages/Product'
import Bartending from './pages/Bartending'
import 'antd/dist/reset.css'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter,Routes,Route,Link
} from 'react-router-dom' 



function App() {
  return (
    // <Home/>
    <HelmetProvider context={{}}>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Aboutus" element={<Aboutus/>}/>
       <Route path="/Product" element={<Product/>}/>
       <Route path="/Bartending" element={<Bartending/>}/>
    </Routes>
   </BrowserRouter>
   </HelmetProvider>
  )
}

export default App
