import './App.scss'

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import { Route, Routes } from 'react-router-dom'

import Index from './pages/Index.js'
import Attractions from './pages/attractions.js'
import Contact from './pages/contact.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/attractions" element={<Attractions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App