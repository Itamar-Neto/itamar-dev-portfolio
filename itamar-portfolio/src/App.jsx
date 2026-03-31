import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Technology from './pages/Technology.jsx'
import Projects from './pages/Projects.jsx'

function App() {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Home />
      <About />
      <hr />
      <Technology />
      <hr />
      <Projects />
      <hr />
    </div>
  )
}

export default App
