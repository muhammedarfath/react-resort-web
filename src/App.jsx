import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './components/Header/Header'
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Contact from './Pages/Contact';
import Gallrey from './Pages/Gallrey';
import N404 from './Pages/N404';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FAQ from './Pages/FAQ';
function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Header/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery' element={<Gallrey />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/*' element={<N404 />} />
          </Route>
        </Routes>
      </Router> 
    </div>
  )
}

export default App
