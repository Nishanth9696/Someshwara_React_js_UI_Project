import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Career from './Pages/Career'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import Home from './Pages/Home'
import Products from './Pages/Products'



const App = () => {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/career' element={<Career/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
     </BrowserRouter>


    // <Router>
    //     <Routes>
    //         <Route path='/' element={<Home/>} />
    //         <Route path='/products' element={<Products/>} />
    //         <Route path='/services' element={<Services/>} />
    //         <Route path='/portfolio' element={<Portfolio/>} />
    //         <Route path='/career' element={<Career/>} />
    //         <Route path='/contact' element={<Contact/>} />     
    //     </Routes>
    // </Router>
  )
}

export default App

