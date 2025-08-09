import './App.css'
import MovingBoxes from './components/MovingBoxes'
import Navbar from './components/Navbar'
import AboutProvider from './contexts/AboutContext'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
function App() {
  return (
    <>
      <AboutProvider>
        <Navbar />
        {/* <HomePage /> */}
        <MovingBoxes />

        <AboutPage />
      </AboutProvider>
    </>
  )
}

export default App
