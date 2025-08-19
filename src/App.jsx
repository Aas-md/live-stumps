import './App.css'
import Footer from "./components/navbar & footer/footer"
import Navbar from "./components/navbar & footer/navbar"
import Homepage from "./pages/homepage/Homepage"
import SchedulePage from './pages/schedule/schedulePage'
import PastPage from './pages/past/PastPage'
import ScorePage from './pages/score/ScorePage'

function App() {
  

  return (
    <div className="app">
      <Navbar/>
     <main>
       <ScorePage/>
     </main>
      <Footer/>
    </div>
  )
}

export default App
