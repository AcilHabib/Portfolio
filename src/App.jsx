import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MovingBoxes from './components/MovingBoxes'
import Navbar from './components/Navbar'
import AboutProvider from './contexts/AboutContext'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import FullStackProjects from './pages/FullStackProjects'
import MobileProjects from './pages/MobileProjects'
function App() {
  return (
    <>
      <AboutProvider>
        <MovingBoxes />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="FullStackProjects" element={<FullStackProjects />} />
          <Route path="MobileProjects" element={<MobileProjects />} />
        </Routes>
      </AboutProvider>
    </>
  )
}

export default App
