import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Technology from './pages/Technology.jsx'

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Technology />
    </div>
  )
}

export default App
