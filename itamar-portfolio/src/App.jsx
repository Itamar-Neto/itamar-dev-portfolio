import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home.jsx'

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
