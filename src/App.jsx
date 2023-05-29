import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import 'antd/dist/reset.css'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter,Routes,Route,Link
} from 'react-router-dom' 




function App() {
  return (
    <HelmetProvider context={{}}>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Aboutus" element={<Aboutus/>}/>
    </Routes>
   </BrowserRouter>
   </HelmetProvider>
  )
}

export default App
