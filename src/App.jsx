import './App.css'
import Footer from "./components/navbar & footer/footer"
import Navbar from "./components/navbar & footer/navbar"
import Homepage from "./pages/homepage/Homepage"
import SchedulePage from './pages/schedule/schedulePage'
import PastPage from './pages/past/PastPage'
import ScorePage from './pages/score/ScorePage'
import ProfilePage from './pages/profilePage/ProfilePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from './utils/ErrorBoundary.jsx'



<Routes>
  <Route path="/player/:id" element={<ProfilePage />} />
  <Route path="/score/:id" element={<ScorePage />} />
  <Route path="/schedule" element={<SchedulePage />} />
  <Route path="/completed" element={<PastPage />} />
</Routes>


function App() {


  return (
    <div className="app">
      <Navbar />
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/score/:id' element={<ScorePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/completed" element={<PastPage />} />
            <Route path="/player/:id" element={<ProfilePage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default App
