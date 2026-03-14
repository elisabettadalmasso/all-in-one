import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import Eventi from './pages/Eventi'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/eventi" element={<Eventi />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
    </>
  )
}

export default App