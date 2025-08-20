import './App.css'
import Footer from "./components/navbar & footer/footer"
import Navbar from "./components/navbar & footer/navbar"
import Homepage from "./pages/homepage/Homepage"
import SchedulePage from './pages/schedule/schedulePage'
import PastPage from './pages/past/PastPage'
import ScorePage from './pages/score/ScorePage'
import ProfilePage from './pages/profilePage/ProfilePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


<Routes>
  <Route path="/player/:id" element={<ProfilePage />} />
</Routes>


function App() {


  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ScorePage />} />
          <Route path="/player/:id" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
